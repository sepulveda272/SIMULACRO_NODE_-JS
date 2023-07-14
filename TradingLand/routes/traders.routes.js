import { Router } from "express";
import { getDato,addDato,delDato,getOne,updOne } from "../controller/traders.controller.js";

const router = Router();

router.get("/",getDato);
router.post("/",addDato);
router.delete("/:id",delDato);
router.get("/:id",getOne);
router.put("/:id",updOne)

export default router;