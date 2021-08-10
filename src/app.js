//modules
import express from "express"

//router import
import router from "./routes/index.routes"

//server
const app = express()

//midlleware
app.use(express.json());

//routes
app.use("/", router);
//export app
export default app