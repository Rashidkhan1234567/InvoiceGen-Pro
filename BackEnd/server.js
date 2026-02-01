import express from "express";
import { configDotenv } from "dotenv";
import connentDB from "./config/db.js";
import cors from 'cors'
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import clientsRouts from "./routes/clientsRoutes.js";
import generateInvoiceRoutes from "./routes/generateInvoiceRoutes.js";
import serviesRoutes from "./routes/serviesRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
configDotenv()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
   origin: true, 
   credentials: true 
}))
app.use('/auth',authRoutes)
app.use(clientsRouts)
app.use(generateInvoiceRoutes)
app.use(serviesRoutes)
app.use(analyticsRoutes)

// Connect to database
connentDB()

// Export the app for Vercel serverless functions
export default app