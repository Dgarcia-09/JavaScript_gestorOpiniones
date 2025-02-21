import { validarCampos } from "./validate-fields.js"
import { handleErrors } from "./handle-errors.js"
import { validateJWT } from "./validar-jwt.js"
import { hasRoles } from "./validar-rol.js"

export const addCommentValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "USER_ROLE"),
    validarCampos,
    handleErrors
]

export const updateCommentValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "USER_ROLE"),
    validarCampos,
    handleErrors
]
export const deleteCommentValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "USER_ROLE"),
    validarCampos,
    handleErrors
]