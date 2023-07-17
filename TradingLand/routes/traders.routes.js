import { Router } from "express";
import { getTraders,addTraders,deleteTraders,getOneTraders,updTraders } from "../controller/traders.controller.js";

const router = Router();

router.get("/",getTraders);
router.post("/add",addTraders);
router.delete("/del/:id",deleteTraders);
router.get("/:id",getOneTraders);
router.put("/upd/:id",updTraders)

export default router;