import { Router } from "express"
import { updatePassword, updateUser} from "./user.controller.js"
import { updatePasswordValidator, updateUserValidator} from "../middlewares/userValidator.js"

const router = Router()


router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

router.put("/updateUser/:uid", updateUserValidator, updateUser)


export default router