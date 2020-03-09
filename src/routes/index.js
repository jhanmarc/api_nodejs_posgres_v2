import { Router } from 'express'
const router = Router()
const jwt = require('jsonwebtoken')


router.get('/', (req, res) => {
    res.json({
        text: 'api jwt'
    })
})

router.post('/api/login', (req, res) => {
    const user = { id: 3 }
    const token = jwt.sign({ user }, 'my_secret_key')
    res.json({
        token
    })
})

router.get('api/protected', (req, res) => {
    res.json({
        text: 'protected'
    })
})



export default router