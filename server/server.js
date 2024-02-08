const mongoose = require("mongoose");
const express = require("express")
const cors = require("cors");

//own imports
const userRoute = require("./routes/users.router")

const app = express();

app.use(express.json());
// app.use(express.text())
app.use(express.urlencoded())
app.use(cors());

app.use((req, res, next)=>{
    next();
})

app.use('/api/users', userRoute);


//code to test
app.get('/', (req, res, next)=>{
    console.log(req.query);
    res.send("Hello World")

})

app.post('/', (req, res, next)=>{
    res.status(201).send("thanks for adding something")
})

app.put("/:id", (req, res)=>{
    res.status(200).send("thnaks for updating something")
})

app.delete("/:id", (req, res)=>{
    res.status(200).send("thanks for deleting something")
})



mongoose.connect("mongodb+srv://emilianokaleb:Mongokaleb2005@proyectocoder.bmy8cw1.mongodb.net/test?retryWrites=true&w=majority")
    .then(()=>{
        console.log("database connected");
    })
    .catch((err)=>{
        console.log(err)
    })

const PORT = 8080;
app.listen(PORT, ()=>[
    console.log("server connected")
])
