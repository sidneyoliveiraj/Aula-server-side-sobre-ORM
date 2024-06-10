import express from "express"
import{getTurmas} from "../Controllers/turma_controller.js"

const router = express.Router()

router.get('/turma', getTurmas)
// ...outras rotas

export default router