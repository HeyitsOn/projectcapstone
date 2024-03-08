import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { userRouter } from "./Controller/usersController.js";
import PackageRouter from "./Controller/packagesController.js";
import { errorHandling } from './middleware/ErrorHandling.js';

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandling);

// Access-Control headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});

// Routes
app.use('/users', userRouter);
app.use('/packages', PackageRouter);

// Default route
app.get('^/$|/backend', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
