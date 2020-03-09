import Sequelize from 'sequelize'
import { sequelize } from '../utils/database'
import bcrypt from 'bcrypt-nodejs'

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT,
        select: false
    },
    first_name: {
        type: Sequelize.TEXT
    },
    end_name: {
        type: Sequelize.TEXT
    },
    active: {
        type: Sequelize.BOOLEAN
    },
    admin: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default Task