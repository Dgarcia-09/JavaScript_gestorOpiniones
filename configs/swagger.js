import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Gestor Opiniones",
            version: "1.0.0",
            description: "API para gestionar opiniones que realizan los usuarios",
            contact:{
                name: "Diego Garcia",
                email: "dgarcia-2023532@kinal.org.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/gestorOpiniones/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/user/user.routes.js",
        "./src/category/category.routes.js",
        "./src/comment/comment.routes.js",
        "./src/post/post.routes.js"
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}