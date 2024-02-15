const {Router} = require("express");

const Sellers = require("../models/sellers.model");
const sellersRouter = Router();

sellersRouter.get('/:id', async(req, res, next)=>{
    const {id} = req.params;
    try{
        if(id){
            
            res.sendStatus(201).send(await Sellers.findById(id));
        }else{
            res.sendStatus(200).send(await Sellers.find())
        }
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
});

sellersRouter.post('/', async(req, res, next)=>{
    try{
        
        await Sellers.create(req.body.seller);
        console.log("seller created")
        res.sendStatus(201)
    }catch(err){
        res.sendStatus(500)
    }   
})

module.exports = sellersRouter