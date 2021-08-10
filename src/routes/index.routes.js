import {Router} from "express"
const router = Router()

//function controller(req, res)
import { getdata } from "../controller/index.controller";

//main route
router.get("/", getdata);

export default router;