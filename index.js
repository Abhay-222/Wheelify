import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
//add parser
app.use(express.json());
app.use(cookieParser());

import router from "./Routes/auth.js";
app.use("/api/v1", router);

//start server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})

//connect db
import dbConnect from "./config/dbConnection.js";
dbConnect();

//default Route
app.get("/",(req,res) => {
    res.send(`<h1>Yo Yo Yo</h1>`);
})