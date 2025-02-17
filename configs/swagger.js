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
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}