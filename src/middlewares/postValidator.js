import { body, param} from "express-validator"
import { validarCampos } from "./validate-fields.js"
import { handleErrors } from "./handle-errors.js"
import { validateJWT } from "./validar-jwt.js"
import { hasRoles } from "./validar-rol.js"


export const addPostValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "USER_ROLE"),
    body("title").notEmpty().withMessage("Ingrese un titulo para la publicacion"),
    body("text").notEmpty().withMessage("Ingrese un texto para la publicacion"),
    validarCampos,
    handleErrors
]


export const updatePostValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "USER_ROLE"),
    param("uid").isMongoId().withMessage("Ingrese un Id valido"),
    validarCampos,
    handleErrors
]


export const deletePostValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "USER_ROLE"),
    param("uid").isMongoId().withMessage("Ingrese un Id valido"),
    validarCampos,
    handleErrors
]