import express, { json } from 'express'
import morgan from 'morgan'


// importing routes
import projectRoutes from './routes/projects'
import taskRoutes from './routes/tasks'
import indexRoute from './routes/index'

// initialization
const app = express()

//middlewares
// ver peticiones por consola
app.use(morgan('dev'))
    // para entienda el formato que le envia el cliente
app.use(json())

//routes
app.use('/', indexRoute)
app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)




export default app