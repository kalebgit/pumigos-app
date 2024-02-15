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
    updatedAt: {
        type: Date,
        default: ()=>Date.now(),

    }
});

sellerSchema.pre('save', function(next){
    this.updatedAt = Date.now()
    next()
});

const Sellers = mongoose.model('sellers', sellerSchema);

module.exports = Sellers