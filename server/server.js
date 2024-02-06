const mongoose = require("mongoose");




mongoose.connect("mongodb+srv://emilianokaleb:Mongokaleb2005@proyectocoder.bmy8cw1.mongodb.net/test?retryWrites=true&w=majority")
    .then(()=>{
        console.log("database connected");
    })
    .catch((err)=>{
        console.log(err)
    })
