import express from 'express'
import router from './api/index.js'

const app = express()

const PORT = 8080

app.use('/api', router)

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${8080}`))