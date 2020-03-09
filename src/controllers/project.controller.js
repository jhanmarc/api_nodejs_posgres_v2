import Sequelize from 'sequelize'
import Project from '../models/Project'

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll()
        res.json({
            data: projects
        })
    } catch (error) {
        console.log(error);
    }
}

export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if (newProject) {
            return res.json({
                messege: 'Proyecto creado',
                data: newProject
            })
        }
    } catch (e) {
        res.status(500).json({
            messege: 'Problemas de servidor',
            data: {}
        })
    }
}

export async function getProjectId(req, res) {
    const { id } = req.params
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        })
        res.json({ project })
    } catch (error) {
        console.log(error);
    }
}

export async function deleteProject(req, res) {
    const { id } = req.params
    try {
        const deleteRowCount = await Project.destroy({
            where: {
                id
            }
        })
        res.json({
            messege: 'Proyecto eliminado exitosamente',
            count: deleteProject
        })
    } catch (error) {
        console.log(error);
    }
}

export async function updateProject(req, res) {
    const { id } = req.params
    const { name, priority, description, deliverydate } = req.body

    try {
        const projects = await Project.findAll({
            attributer: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
                id
            }
        })
        if (projects.length > 0) {
            projects.forEach(async updateproject => {
                await updateproject.update({
                    name,
                    priority,
                    description,
                    deliverydate
                })
            });
        }
        return res.json({
            messege: 'Proyecto actualizado correctamente',
            data: projects

        })
    } catch (error) {
        console.log(error);
    }
}

export async function searchProject(req, res) {
    const { name } = req.params
    const Op = Sequelize.Op;
    try {
        const searchName = await Project.findAll({
            attributer: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
                name: {
                    [Op.like]: `%${name}%`,
                }
            }
        }, {
            offset: 10,
            limit: 2
        })
        res.json(searchName)
    } catch (error) {
        console.log(error);
    }
}