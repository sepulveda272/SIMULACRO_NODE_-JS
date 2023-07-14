import express from "express";
import accionesRoutes from "../routes/acciones.routes.js";

class Server {

    constructor(){
        this.app=express();
        this.app.use(express.json());
        this.port =process.env.PORT;
        this.accionesPath = "/api/accion";

        //Routes//
        this.routes();
    }

    routes(){
        this.app.use(this.accionesPath,accionesRoutes);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Running en port ${this.port}`);
        })
    }
}

export default Server;