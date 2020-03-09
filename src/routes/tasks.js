import { Router } from 'express'
const router = Router()

import { getTasks, createTask, updateTask, deleteTask, getTaskId, getTaskByProject } from '../controllers/task.controller'

router.get('/', getTasks)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)
router.get('/:id', getTaskId)

// api/task/project/:projectid
router.get('/project/:projectid', getTaskByProject)


export default router