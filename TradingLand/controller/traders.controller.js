import Trader from "../models/traders.js";

const getDato = async (req,res)=>{
    try {
        const trader = await Trader.find();
        res.send(trader);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const addDato = async (req,res)=>{
    const trader = await Trader(req.body);
    try {
        const nuevo = await trader.save();
        res.send(nuevo);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const delDato = async (req,res)=>{
    try {
        const trader = await Trader.deleteOne({_id:req.params.id})
        res.send(trader);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const getOne = async (req,res)=>{
    try {
        const trader = await Trader.findOne({_id:req.params.id});
        res.send(trader);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const updOne = async (req,res)=>{
    try {
        const trader = await Trader.findOne({_id:req.params.id});
        if(req.body.nombre){
            trader.nombre = req.body.nombre
        }
        if(req.body.precio){
            trader.precio = req.body.precio
        }
        if(req.body.cantidad){
            trader.cantidad = req.body.cantidad
        }
        await trader.save();
        res.send(trader);

    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

export{
    getDato,
    addDato,
    delDato,
    getOne,
    updOne
}