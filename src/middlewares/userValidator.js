import { body, param } from "express-validator";
import { emailExists, usernameExists, userExists } from "../helpers/db-validator.js";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { validateJWT } from "./validar-jwt.js";
import { hasRoles } from "./validar-rol.js";

export const registerValidator = [
    body("username").notEmpty().withMessage("El username es requerido"),
    body("email").notEmpty().withMessage("El email es requerido"),
    body("email").isEmail().withMessage("No es un email válido"),
    body("email").custom(emailExists),
    body("username").custom(usernameExists),
    body("password").isStrongPassword({
        minLength: 8,
        minLowercase:0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0
    }),
    validarCampos,
    handleErrors
]

export const loginValidator = [
    body("email").optional().isEmail().withMessage("No es un email válido"),
    body("username").optional().isString().withMessage("Username es en formáto erróneo"),
    body("password").isLength({min: 8}).withMessage("El password debe contener al menos 8 caracteres"),
    validarCampos,
    handleErrors
]

export const updatePasswordValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "USER_ROLE"),
    param("uid").custom(userExists),
    body("newPassword").isStrongPassword({
        minLength: 8,
        minLowercase:0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0
    }),
    validarCampos,
    handleErrors
]

export const updateUserValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE", "USER_ROLE"),
    param("uid").custom(userExists),
    body("email").optional().isEmail().withMessage("Ingrese un email valido"),
    body("email").custom(emailExists),
    validarCampos,
    handleErrors
]