const mongoose = require("mongoose");
const express = require("express")
const cors = require("cors");

//own imports
const userRoute = require("./routes/users.router")
const productsRoute = require("./routes/products.router")
const sellersRoute = require("./routes/sellers.router")

const app = express();

app.use(express.json());
app.use(express.text())
app.use(express.urlencoded())
app.use(cors({
    origin: "*"
}));

app.use((req, res, next)=>{
    next();
})

app.use('/api/users', userRoute);
app.use('/api/products', productsRoute);
app.use('/api/sellers', sellersRoute)


const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("server connected")
    mongoose.connect("mongodb+srv://emilianokaleb:Mongokaleb2005@proyectocoder.bmy8cw1.mongodb.net/test?retryWrites=true&w=majority")
    .then(()=>{
        console.log("database connected");
    })
    .catch((err)=>{
        console.log(err)
    })
})
