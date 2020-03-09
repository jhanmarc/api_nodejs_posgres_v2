import Task from '../models/Tasks'

export async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            order: [
                ['id', 'DESC']
            ]
        })
        res.json({
            data: tasks
        })
    } catch (error) {
        console.log(error);
    }
}

export async function createTask(req, res) {
    const { name, done, projectid } = req.body
    try {
        const newTask = await Task.create({
            name,
            done,
            projectid
        }, {
            fields: ['name', 'done', 'projectid']
        })
        res.json({ message: 'Tarea creado exitosamente', data: newTask })
    } catch (error) {
        console.log(error);
    }
}

export async function updateTask(req, res) {
    const { id } = req.params
    const { name, done, projectid } = req.body
    try {
        const task = await Task.findOne({
            attributes: ['name', 'done', 'projectid'],
            where: { id }
        })
        const updateTask = await Task.update({
            name,
            done,
            projectid
        }, {
            where: { id }
        })

        res.json({
            message: 'Tarea Actualizado exitosamente',
            count: updateTask
        })
    } catch (error) {
        console.log(error);
    }
}

export async function deleteTask(req, res) {
    const { id } = req.params
    try {
        const contdelete = await Task.destroy({
            where: {
                id
            }
        })
        res.json({
            message: 'Tarea eliminada',
            count: contdelete
        })
    } catch (error) {
        console.log(error);
    }
}

export async function getTaskId(req, res) {
    const { id } = req.params
    try {
        const task = await Task.findOne({
            where: { id },
            attributes: ['id', 'projectid', 'name', 'done']
        })
        res.json({ task })
    } catch (error) {
        console.log(error);
    }

}

export async function getTaskByProject(req, res) {
    const { projectid } = req.params
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'projectid', 'name', 'done'],
            where: { projectid }
        })

        res.json({ tasks })
    } catch (error) {

    }
}