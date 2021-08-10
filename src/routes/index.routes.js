import {Router} from "express"
const router = Router()

import { getdata } from "../controller/index.controller";

router.get("/", getdata);

export default router;