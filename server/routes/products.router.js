const Products = require("../models/products.model")
const {Router} = require("express")

const productsRouter = Router();

productsRouter.get('/', async(req, res, next)=>{
    const {limit} = req.query;
    try{
        if(limit){
            res.sendStatus(200).send(await Products.find().limit(limit))
        }else{
            res.sendStatus(200).send(await Products.find())
        }
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

productsRouter.get('/:id', async(req, res, next)=>{
    const {id} = req.params;
    const {limit} = req.query;
    try{
        if(id){
            res.sendStatus(201).send(await Products.findById(id));
        }else{
            res.sendStatus(200).send(limit ? await Products.find().limit(limit) : await Products.find())
        }
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

productsRouter.post('/', async(req, res, next)=>{
    try{
        await Products.create(req.body);
        console.log("product created")
        res.sendStatus(201)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
    
})

module.exports = productsRouter