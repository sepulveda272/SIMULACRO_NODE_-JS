import Acciones from "../models/Acciones.js";

const obtenerAcciones = async (req,res)=>{
    const acciones = await Acciones.find();

    res.json(acciones);
};

const agregarAcciones = async (req,res)=>{
    const acciones = new Acciones(req.body);

    try {
        const nuevoAcciones = await acciones.save();

        res.json(nuevoAcciones);
    } catch (error) {
        console.log(error);
    }
}

const borrarAcciones = async (req,res)=>{
    try {
        await Acciones.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404)
        res.send({error: "La accion no existe"});
    }
}

const actualizarAcciones = async (req, res) =>{
    try {
        const accione = await Acciones.findOne({_id:req.params.id});

        if(req.body.nombre){
            accione.nombre = req.body.nombre;
        }
        if(req.body.valor){
            accione.valor = req.body.valor;
        }
        if(req.body.cantidad){
            accione.cantidad = req.body.cantidad;
        }
        await accione.save()
        res.send(accione);
    } catch (error) {
        res.status(404)
        res.send({error: "la accion no existe"});
    }
}

export{
    obtenerAcciones,
    agregarAcciones,
    borrarAcciones,
    actualizarAcciones
};