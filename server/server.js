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
