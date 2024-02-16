const {Router} = require("express");

const Sellers = require("../models/sellers.model");
const sellersRouter = Router();

sellersRouter.get('/:id', async(req, res, next)=>{
    const {id} = req.params;
    try{
        if(id){
            
            res.status(201).send(await Sellers.findById(id));
        }else{
            res.status(200).send(await Sellers.find())
        }
    }catch(err){
        console.log(err)
        res.status(500)
    }
});

sellersRouter.post('/', async(req, res, next)=>{
    try{
        
        await Sellers.create(req.body.seller);
        console.log("seller created")
        res.status(201)
    }catch(err){
        res.status(500)
    }   
})

module.exports = sellersRouter