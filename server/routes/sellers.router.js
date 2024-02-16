const {Router} = require("express");

const Sellers = require("../models/sellers.model");
const sellersRouter = Router();
//getting all sellers or a limit of them
sellersRouter.get('/', async(req, res, next)=>{
    const{code, data} = await get({limit: req.query.limit, model: Sellers});
    req.status(code).send(data);
});
//get one seller  by id
sellersRouter.get('/:id', async(req, res, next)=>{
    const{code, data} = await get({id: req.params.id, model: Sellers});
    req.status(code).send(data);
});
//creating a new seller
sellersRouter.post('/', async(req, res, next)=>{
    const{code} = await post({data: req.body, model: Sellers});
    res.status(code)
});


module.exports = sellersRouter