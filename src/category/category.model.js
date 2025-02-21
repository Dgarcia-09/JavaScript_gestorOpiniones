import { Schema, model } from "mongoose";

const categorySchema = Schema({
    name:{
        type: String,
        required: [true, "Ingrese un nombre para la categoria"],
        unique: true
    },
},{
    timestamps: true,
    versionKey: false
});

export default model('Category', categorySchema);