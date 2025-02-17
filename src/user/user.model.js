import { Schema, model} from "mongoose";

const userSchema = Schema({
    name:{
        type: String,
        required: [true, "El nombre es requerido"],
        maxLength: [25, "El nombre no puede exceder los 25 caracteres"]
    },
    surname:{
        type: String,
        required: [true, "El apellido es requerido"],
        maxLength: [25, "El apellido no puede exceder los 25 caracteres"]
    },
    username:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    phone:{
        type: String,
        minLength: 8,
        maxLength: 8,
        required: true
    },
    role:{
        type: String,
        required: false,
        defualt: "USER_ROLE"
    },
    status:{
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timeStamps: true
})

userSchema.methods.toJSON = function(){
    const {password, _id, ...usuario} = this.toObject()
    usuario.uid = _id
    return usuario
}

export default model("User", userSchema)