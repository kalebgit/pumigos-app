const {Router} = require("express")
const Users = require("../models/users.model")
const {get, post} = require('../util/httpfunctions')

const userRouter = Router();

userRouter.get('/:id', async(req, res, next)=>{
    
    const {code, data} = await get({id: req.params.id, model: Users});
    res.status(code).send(data);
});

userRouter.get('/', async(req, res, next)=>{
    const {code, data} = await get({limit: req.query.limit, model: Users});
    res.status(code).send(data);
})
userRouter.post('/', async(req, res, next)=>{
    const {code} = await post({data: req.body, model: Users})
    res.status(code)
})



module.exports =  userRouter;