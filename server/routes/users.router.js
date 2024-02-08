const {Router} = require("express")
const User = require("../models/users.model")

const userRouter = Router();

userRouter.get('/:id', async(req, res, next)=>{
    const {id} = req.params;
    try{
        if(id){
            const user = await User.findById(id);
            if(user) res.status(200).send(user)
            else res.status(404).send()
        }else res.send(await User.find())
    }catch(err){
        console.log(err)
        res.status(500).send()
    }
    
});

userRouter.post('/', async(req, res, next)=>{
    // try{
    //     const user = await User.create(req.body);
    //     res.status(201)
    // }catch(err){
    //     console.log(err)
    //     res.status(500)
    // }
    console.log("post method: ")
    console.log(req.body)
    res.status(200).send("JFAJFAJ")
})

userRouter.put('/', async(req, res, next)=>{
    
})

userRouter.delete('/', async(req, res, next)=>{

})




module.exports =  userRouter;