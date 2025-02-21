import { body, param } from "express-validator";
import { handleErrors } from "./handle-errors.js";
import { validarCampos } from "./validate-fields.js";
import { validateJWT } from "./validar-jwt.js";
import { hasRoles } from "./validar-rol.js";


export const addCategoryValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("name").notEmpty().withMessage("Ingrese un nombre para la categoria"),
    validarCampos,
    handleErrors
];

export const updateCategoryValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("id").isMongoId().withMessage("Ingrese un Id valido"),
    body("name").notEmpty().withMessage("Ingrese un nombre para la categoria"),
    validarCampos,
    handleErrors
];

export const deleteCategoryValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("id").isMongoId().withMessage("Ingrese un id valido"),
    validarCampos,
    handleErrors
];