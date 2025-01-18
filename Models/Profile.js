import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    
    gender: {
        type:String,
    },
    dateOfBirth: {
        type:String,
    },
    contactNumber: {
        type:Number,
        trim:true,
    },
    address:{
        type:String
    },

});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;