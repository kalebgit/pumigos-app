const {Router} = require("express")
const Users = require("../models/users.model")

const userRouter = Router();

userRouter.get('/', async(req, res, next)=>{
    const {limit} = req.query;
    try{
        if(limit){
            res.sendStatus(await Users.find().limit(limit))
        }else{
            res.send(await Users.find())
        }
        
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

userRouter.get('/:id', async(req, res, next)=>{
    const {id} = req.params;
    try{
        if(id){
            const user = await Users.findById(id);
            if(user){
                
                res.sendStatus(200).send(user)
            }
            else res.sendStatus(404).send()
        }else res.sendStatus(404).send()
    }catch(err){
        console.log(err)
        res.sendStatus(500).send()
    }
    
});

userRouter.post('/', async(req, res, next)=>{
    try{
        await Users.create(req.body);
        console.log("user created")
        res.sendStatus(201)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
    
})



module.exports =  userRouter;