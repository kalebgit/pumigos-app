const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: false,
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

const Seller = mongoose.model('sellers', sellerSchema);

module.exports = Seller