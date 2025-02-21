import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title:{
        type: String,
        required: [true, "Ingrese un titulo a su publiacion"],
        maxLength: [50, "El titulo no puede exceder los 50 caracteres"],
        unique: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    text:{
        type: String,
        required: true,
        maxLength: [100, "El texto no puede exceder los 100 caracteres"]
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
},{
    timestamps: true,
    versionKey: false
});

export default model('Post', postSchema)