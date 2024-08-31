import mongoose from "mongoose";

const OTPModel = new mongoose.Schema({
    OTP:{
        type:String
    },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    ownerId: {type:mongoose.Schema.Types.ObjectId,ref:"OWner"},
},
    { timestamps: true }
);

OTPModel.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

export default mongoose.model("OTP", OTPModel);