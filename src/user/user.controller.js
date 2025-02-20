import { hash, verify } from "argon2";
import User from "./user.model.js"


export const updateUser = async (req, res) => {
    try {
        const { uid } = req.params;
        const  data  = req.body;

        const user = await User.findByIdAndUpdate(uid, data, { new: true });

        res.status(200).json({
            success: true,
            msg: 'Usuario Actualizado',
            user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al actualizar usuario',
            error: err.message
        });
    }
}


export const updatePassword = async (req, res) => {
    try {
        const { uid } = req.params;
        const { oldPassword, newPassword } = req.body; 

        const user = await User.findById(uid);

        const SIoldPassword = await verify(user.password, oldPassword);

        if (!SIoldPassword) {
            return res.status(400).json({
                success: false,
                message: "La contraseña anterior es incorrecta"
            });
        }

        const SIOldAndNewPassword = await verify(user.password, newPassword);
        if (SIOldAndNewPassword) {
            return res.status(400).json({
                success: false,
                message: "La nueva contraseña no puede ser igual a la anterior tonto"
            });
        }

        const encryptedPassword = await hash(newPassword);

        await User.findByIdAndUpdate(uid, { password: encryptedPassword }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Contraseña actualizada"
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar contraseña",
            error: err.message
        });
    }
}
