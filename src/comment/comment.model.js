import { Schema, model } from "mongoose";

const commentSchema = Schema({

    text:{
        type: String,
        required: true
    },
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post:{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
},{
    timestamps: true,
    versionKey: false
});

export default model('Comment', commentSchema)