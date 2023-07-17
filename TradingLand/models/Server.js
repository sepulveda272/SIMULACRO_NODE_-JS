import express from "express";
import tipoDineroRoutes from "../routes/tipoDinero.routes.js";
import dineroRoutes from "../routes/dinero.routes.js";
import accionesRoutes from "../routes/acciones.routes.js";
import tradersRoutes from "../routes/traders.routes.js";

class Server {

    constructor(){
        this.app=express();
        this.app.use(express.json());
        this.port =process.env.PORT;
        
        this.tipoDineroPath = "/api/tipoDinero";
        this.dineroPath = "/api/dinero";
        this.accionesPath = "/api/acciones";
        this.tradersPath = "/api/traders";

        //Routes//
        this.routes();
    }

    routes(){
        this.app.use(this.tipoDineroPath,tipoDineroRoutes);
        this.app.use(this.dineroPath,dineroRoutes);
        this.app.use(this.accionesPath,accionesRoutes);
        this.app.use(this.tradersPath,tradersRoutes);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Running en port ${this.port}`);
        })
    }
}

export default Server;