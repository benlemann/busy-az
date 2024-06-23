const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    userRole: {
        type: String,
        enum: ["employer", "freelancer"],
        required: true
    },

    name: {
        type: String,
        required: [true, "Ad hissəsi məcburidir"],
    },

    email: {
        type: String,
        required: [true, "E-poçt hissəsi məcburidir"],
        unique: true,
        validate: [validator.isEmail, "E-poçt düzgün deyil"],
    },

    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return validator.isMobilePhone(value, 'az-AZ');
            },
            message: props => "Telefon nömrəsi düzgün deyil"
        }
    },

    password: {
        type: String,
        required: [true, "Parol hissəsi məcburidir"],
        minLength: [8, "Parol ən azı 8 simvoldan ibarət olmalıdır"],
    }
},
    {
        timestamps: true
    }
);

userSchema.pre("save", function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return console.log(err.message);
        user.password = hash;
        next();
    });
});

const User = mongoose.model("User", userSchema);

module.exports = { User };