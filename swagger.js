const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const oprions = {
    definition:{
        openapi:"3.0.0",
        info:{  
            title:"User API",
            version:"1.0.0",
        }
    },
    apis:["./routes/*.js"]
}
const swaggerSpec = swaggerJsdoc(oprions)
module.exports  = {swaggerUi,swaggerSpec}