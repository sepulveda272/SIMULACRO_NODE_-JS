import { Router } from "express";
import { getDinero,addDinero,deleteDinero,getOneDinero,updDinero } from "../controller/dinero.controller.js";

const router = Router();

router.get("/",getDinero);
router.post("/add",addDinero);
router.delete("/del/:id",deleteDinero);
router.get("/:id",getOneDinero);
router.put("/upd/:id",updDinero)

export default router;