import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes.js'

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/', routes)

app.listen(process.env.PORT || 5000, () => console.log('App Running...'))
