import { Router } from 'express'
const router = Router()

import { createProject, getProjects, updateProject, deleteProject, getProjectId, searchProject } from '../controllers/project.controller'

router.get('/', getProjects)
router.post('/', createProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)
router.get('/:id', getProjectId)

router.get('/search/:name', searchProject)

export default router