import express from "express";
import {PORT, mongoDBURL} from "./config.js"
import mongoose from "mongoose";
import propertyRouter from './routes/propertyRoute.js'
import userRouter from './routes/userRoute.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from "./routes/authRoute.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/',(request,response) => {
    console.log(request)
    response.header('Access-Control-Allow-Origin', '*');
    return response.status(234).send('Welcome to our SOEN 341 Project')
});

app.use('/users', userRouter);
app.use('/properties',propertyRouter);
app.use('/verify',authRouter);

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

//Connect mongoDb database
mongoose
 .connect(mongoDBURL)
 .then(() => {
     console.log('App connected to database');
 })
 .catch((error) => {
     console.log(error);
 });