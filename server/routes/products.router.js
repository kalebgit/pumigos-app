const Products = require("../models/products.model")
const {Router} = require("express")
const {get, post} = require('../util/httpfunctions')
const productsRouter = Router();

//getting all products or a limit of them
productsRouter.get('/', async(req, res, next)=>{
    const{code, data} = await get({limit: req.query.limit, model: Products});
    req.status(code).send(data);
})
//get one product by id
productsRouter.get('/:id', async(req, res, next)=>{
    const{code, data} = await get({id: req.params.id, model: Products});
    req.status(code).send(data);
})
//creating a new product
productsRouter.post('/', async(req, res, next)=>{
    const{code} = await post({data: req.body, model: Products});
    res.status(code)
})

module.exports = productsRouter