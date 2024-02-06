const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    phoneNumber: {
        type: Number,
        
    },
    products: [
        {
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
                
            }
        }
    ],
    updatedAt: {
        type: Date,
        default: ()=>Date.now(),

    }
});

sellerSchema.virtual = function(){

}

sellerSchema.pre('save', function(next){
    this.updatedAt = Date.now()
    next()
});

const sellerModel = mongoose.model('sellers', sellerSchema);

export default sellerModel