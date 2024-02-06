const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // minLength: 5,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (email)=>email.includes("@"),
            message: "Email has to be with @ symbol"
        },
    },
    password: {
        type: String,
        minLength: 8,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: ()=>Date.now()
    }
})

userSchema.pre('save', function(next){
    this.updatedAt = Date.now();
    next();
})

const User = mongoose.model('users', userSchema);



export default User;