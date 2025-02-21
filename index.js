import {config} from "dotenv"
import {initServer} from "./configs/server.js"
import createAdmin from "./configs/crearAdmin.js"
import { categoriaDefault } from "./src/category/category.controller.js"

config()
initServer()
createAdmin()
categoriaDefault()