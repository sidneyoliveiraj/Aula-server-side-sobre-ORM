import express from "express"
import cors from "cors" 
import db from "./APICRUD/Config/database.js"

import turmaRota from "./APICRUD/Routes/turma_routes.js"
import turmaModel from "./APICRUD/Models/turma_model.js"

const server = express()
server.use(express.json())
server.use(cors())

try {
    await db.authenticate()
    console.log("Conexão com o Mysql estabelecida")
} catch (e) {
    console.log("Conexão com o Mysql não estabelecida",e)
}

server.use(turmaRota)
server.listen(5000, () => console.log("Servidor executando em http://localhost:5000"))