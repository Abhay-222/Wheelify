import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    Owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Owner",   
    },
    Renter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Renter", 
    },
    img:{
        type:String,
        required:true,
    },
    rating:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview",
    }]
});

const Car = mongoose.model("Car", carSchema);
export default Car;