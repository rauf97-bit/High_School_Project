import express from "express";
import dotenv from 'dotenv'
import router from './routes/demoRoutes.js'
import { urlencoded } from "express";
import { errorHandler} from './middleware/errorMiddleware.js';
import connectDB from "./config/db.js";
;

connectDB()

dotenv.config()
const app = express()
const port = process.env.NODE_PORT || 5000

app.use(express())
app.use(urlencoded({extended: false}))
app.use(errorHandler)

app.listen( port, () =>{
  console.log(`Hello World on port ${port}`)
})
app.use('/api/students', router)