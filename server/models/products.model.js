const mongoose = require("mongoose")
const Sellers = require('./sellers.model')

const productsSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: false, 
        validate: {
            validator: (sellerId)=>{
                if(Sellers.findById(sellerId)){
                    return true
                }
                return false
            },
            message: "That seller doesn't exist"
        }
    },
    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: .1,

    },
    thumbnail: {
        type: String,
        required: false,

    },
    code: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true,
        
    }, 
    updatedAt: {
        type: Date,
        default: ()=>Date.now(),

    }
})

productsSchema.pre('save', (next)=>{
    
    this.updatedAt = Date.now()
    next()
})

module.exports = mongoose.model('products', productsSchema)