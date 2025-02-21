import Comment from "./comment.model.js"

export const addComment = async(req, res) => {
    try{
        const { id } = req.params;
        const { text } = req.body;

        const comment = new Comment({
            text,
            post: id,
            creator: req.usuario._id,
        })

        await comment.save();

        const createComment = await Comment.findById(comment._id).populate('post','title').populate('creator','username');

        res.status(200).json({
            success: true,
            createComment
        })

    }catch(error){
        res.status(500).json({
            success: false,
            message: "Erro al crear el comentario",
            error: error.message
        })
    }
}


export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;

        const comment = await Comment.findById(id);
        
        if (!comment) {
            return res.status(404).json({
                success: false,
                message: "Comentario no encontrado",
            });
        }

        comment.text = text;
        await comment.save();

        res.status(200).json({
            success: true,
            message: "El comentario hasido actualizado exitosamente",
            comment,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro al querer actualizar el comentario",
            error: error.message,
        });
    }
};



export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;

        const comment = await Comment.findByIdAndDelete(id);

        if (!comment) {
            return res.status(404).json({
                success: false,
                message: "Comentario no encontrado",
            });
        }

        res.status(200).json({
            success: true,
            message: "Comentario eliminado correctamente",
            comment,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error eliminando el comentario',
            error: error.message,
        });
    }
};
