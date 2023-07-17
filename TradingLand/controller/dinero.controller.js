import Dinero from "../models/dinero.js";

const getDinero = async (req,res)=>{
    try {
        const dinero = await Dinero.find();
        res.send(dinero);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaaaa"});
    }
}

const addDinero = async (req,res)=>{
    const dinero = await Dinero(req.body);
    try {
        const nuevo = await dinero.save();
        res.send(nuevo);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaaaa"});
    }
}

const deleteDinero = async (req,res)=>{
    try {
        const dinero = await Dinero.deleteOne({_id:req.params.id})
        res.send(dinero);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaaaa"});
    }
}

const getOneDinero = async (req,res)=>{
    try {
        const dinero = await Dinero.findOne({_id:req.params.id});
        res.send(dinero);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaaaa"});
    }
}

const updDinero = async (req,res)=>{
    try {
        const dinero = await Dinero.findOne({_id:req.params.id});
        if(req.body.nombre){
            dinero.nombre = req.body.nombre
        }
        if(req.body.precio){
            dinero.precio = req.body.precio
        }
        if(req.body.cantidad){
            dinero.cantidad = req.body.cantidad
        }
        await dinero.save();
        res.send(dinero);

    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaaaa"});
    }
}

export{
    getDinero,
    addDinero,
    deleteDinero,
    getOneDinero,
    updDinero
}