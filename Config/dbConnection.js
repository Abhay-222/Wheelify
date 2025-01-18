import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        // useNewurlParser:true,
        // useUnifiedTopology:true
    })
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((error) => {
        console.log("DB Connection Failed");
        process.exit(1);
    });
}

export default dbConnect;