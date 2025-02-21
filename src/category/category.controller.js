'use strict';

import Post from "../post/post.model.js";
import Category from "./category.model.js";

export const categoriaDefault = async () => {
    try {
        const category = await Category.findOne({ name: "General" }); 
        if (!category) {
            await Category.create({
                name: "General", 
            });
            console.log("Categoría creada por defecto");
        }
    } catch (err) {
        console.log("Error al crear la categoría por defecto:", 
        err.message); 
    }
};


export const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const categoryExists = await Category.findOne({ name });


        if (categoryExists) {
            return res.status(400).json({
                success: false,
                message: "La categoria ya existe"
            });
        }

        const category = new Category({ name });

        await category.save();

        res.status(200).json({
            success: true,
            message: "Categoria agregada exitosamente",
            category
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al agregar la categoría",
            error: err.message 
        });
    }
};


export const updateCategory = async(req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body; 
    
        if (!name) {
          return res.status(400).json({
            success: false,
            message: "Ingrese un nombre"
          });
        }
    
        const categoryExists = await Category.findById(id);
        if (!categoryExists) {
          return res.status(404).json({
            success: false,
            message: "La categoria no fue encontrada"
          });
        }
    
        const categoryUpdate = await Category.findByIdAndUpdate(id, { name }, { new: true });
    
        res.status(200).json({
          success: true,
          message: "La categoria ha sido actualizada",
          category: categoryUpdate
        });
    
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Error al actualizar la categoria",
          error: error.message
        });
    }
}

export const deleteCategory = async (req, res) => {

    try {
      const { id } = req.params;
  
      const categoryExists = await Category.findById(id);

      if (!categoryExists) {
        return res.status(404).json({
          success: false,
          message: "La categoria no fue encontrada"
        });
      }
  
      await Post.deleteMany({ category: id });
  
      await Category.findByIdAndDelete(id);
  

      const categoryDefault = await Category.findOne({ name: "General" });
  
      if (!categoryDefault) {

        const otherCategory = await Category.findOne();  

        if (!otherCategory) {
          return res.status(404).json({
            success: false,
            message: "No hay otras categorias para asginar a tu post, cree otra categoria antes de eliminar"
          });
        }

        await Post.updateMany({ category: id }, { category: otherCategory._id });

      } else {

        await Post.updateMany({ category: id }, { category: categoryDefault._id });
      }
  
      return res.status(200).json({
        success: true,
        message: "La categoria ha sido eliminada",
        category: categoryExists
      });
  
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error al eliminar la categoria",
        error: error.message
      });
    }
  };



export const getCategory = async (req, res) => {
    try{
        const { limite = 5, desde = 0 } = req.query

        const query = {}

        const [total, categories ] = await Promise.all([
            Category.countDocuments(query),
            Category.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
                .sort({createdAt: -1})
        ])

        return res.status(200).json({
            success: true,
            total,
            categories
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error al obtener el liistado de categorias",
            error: error.message
        })
    }
}