import Sequelize from 'sequelize'
import { sequelize } from '../utils/database'

import Task from './Tasks'

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    },

}, {
    timestamps: false
})

// de uno a muchos
Project.hasMany(Task, { foreingKey: 'projectid', sourceKey: 'id' })

// muchas tareas pertenecen a uno
Task.belongsTo(Project, { foreingKey: 'projectid', sourceKey: 'id' })

export default Project