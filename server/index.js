import express from "express";
import router from "./routes/route.js";
import cors from 'cors';
import dbConnection from "./database/db.js";

const app=express();
app.use(cors());
app.use('/',router)


const PORT=8000;

dbConnection();
app.listen(PORT,()=>console.log(`the server is running on ${PORT}`))