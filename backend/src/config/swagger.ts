import swaggerJsdoc from 'swagger-jsdoc'

export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'POC Order System API',
            version: '1.0.0',
            description: 'Simple online order system (POC)'
        },
        servers: [
            {
                url: 'http://localhost:3000/api'
            }
        ]
    },
    apis: ['./src/routes/*.ts*']
}

export const swaggerSpec = swaggerJsdoc(swaggerOptions)