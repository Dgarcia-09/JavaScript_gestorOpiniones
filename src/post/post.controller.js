'use strict'
import Category from "../category/category.model.js";
import Post from "./post.model.js"


export const addPost = async (req, res) => {
    try {
        const { category: name, ...data } = req.body;

        const category = await Category.findOne({ name });
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "No se encontró la categoría indicada",
            })
        }
        const newPost = await Post.create({
            title: data.title,
            text: data.text,
            category: category._id,
            creator: req.usuario._id,
        })
        await newPost.populate('creator', 'username');
        res.status(201).json({
            success: true,
            message: "La publicación ha sido creada correctamente",
            creatorPublication: newPost
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear la publicación",
            error: error.message
        })
    }
}


export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedPost = await Post.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                message: "La publicacion no fue encontrada",
            })
        }

        res.status(200).json({
            success: true,
            message: "La publicacion ha sido actualizado exitosamente",
            data: updatedPost,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "NO se pudo actualizar la publicacion",
            error: error.message,
        })
    }
}



export const deletePost = async(req, res) => {
    try{
        const { id } = req.params;

        const publicacion = await Post.findByIdAndDelete(id);

        if (!publicacion) {
            return res.status(404).json({
                success: false,
                message: "No se encontro la publicacion indicada",
            });
        }

        res.status(200).json({
            success: true,
            message: "La publicacion ha sido eliminada exitosamente",
            publicacion,
        })   
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error al querer eliminar la publicacion",
            error: error.message
        })
    }
}
