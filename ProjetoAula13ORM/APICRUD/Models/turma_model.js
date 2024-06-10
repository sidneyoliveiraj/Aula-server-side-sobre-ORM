import { Sequelize } from "sequelize";

import bd from "../Config/database.js"

const Turma =bd.define('Turma',{
    id_turma: {
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    nome_turma: {
        type: Sequelize.toString(200)
    },
    turno_turma:{
        type: Sequelize.toString(100)
    }
}, {
    freezeTableName: true,
    timestamps:false
})
export default Turma