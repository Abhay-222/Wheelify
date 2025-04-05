import express from "express";
import dotenv from "dotenv";
//import dbConnection from "./config/dbConnection.js";
import mongoose from 'mongoose';
import loginSignup from "./Routes/loginSignup.js";
import profile from "./Routes/profile.js";
import provider from "./Routes/provider.js";
import renter from "./Routes/renter.js";
import ratingAndReviews from "./Routes/ratingAndReviews.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
//middlewares
app.use(express.json());
app.use(cookieParser());

//connect d
const dbConnection  = () => {
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
 dbConnection();

//mount router
app.use("/api/v1", loginSignup);
app.use("/api/v1", profile);
app.use("/api/v1", provider);
app.use("/api/v1", renter);
app.use("/api/v1", ratingAndReviews);

//start server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})


