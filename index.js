import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnection.js";
import auth from "./Routes/auth.js";
import cookieParser from "cookie-parser";
import cloudinaryConnect from "./Config/cloudinaryConnection.js";
import fileUpload from "express-fileupload";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
//middlewares
app.use(express.json());
app.use(cookieParser());

//connect db
dbConnect();

//mount router
app.use("/api/v1", auth);

//connect cloudinary
cloudinaryConnect();

//start server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})


