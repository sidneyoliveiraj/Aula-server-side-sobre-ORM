import { Sequelize } from "sequelize";

        const db = new Sequelize('escola', 'root', '',{
            host: 'localhost',
            dialect: 'mysql'

        })

export default db