import express from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import router from './routes/demoRoutes.js'
import { urlencoded } from "express";
import { errorHandler} from './middleware/errorMiddleware.js';

// Call database connection
connectDB()
dotenv.config()

// Instantiate Express
const app = express()
const port = process.env.NODE_PORT || 5000

// Middleware to enable sending data thru API req.body attributes
app.use(express.json())
app.use(urlencoded({extended: false}))

app.use(errorHandler)

app.listen( port, () =>{
  console.log(`Hello World on port ${port}`)
})
// Route all api in the router file to the same parent Url
app.use('/api/students', router)
app.use('/api/users', router)