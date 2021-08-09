import express from "express"

//server
const app = express()

//midlleware
app.use(express.json());

//routes

//export app
export default app