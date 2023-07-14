import mongoose from "mongoose";

const conectarDB = async ()=>{
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });

        const url = `Conectado a mongo en server ${connectionDB.connection.host} en puerto ${connectionDB.connection.port}`
        console.log(url);
    } catch (error) {
        console.log(error);
    }
}

export default conectarDB;