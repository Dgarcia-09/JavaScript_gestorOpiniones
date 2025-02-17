import {config} from "dotenv"
import {initServer} from "./configs/server.js"
import createAdmin from "./configs/crearAdmin.js"

config()
initServer()
createAdmin();