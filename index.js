import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { userRouter } from './Controller/usersController.js';
import { BookingRouter } from './Controller/weddingBookingController.js';
import {packageRouter} from './Controller/packagesController.js';
import { errorHandling } from './middleware/ErrorHandling.js';

// import {AuthenticateUser } from './middleware/AuthenticateUser';


const port = process.env.PORT || 5501;
const app = express();
app.use(cors({
  origin: " http://localhost:8080",
  credentials: true
}));
app.use(express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandling);
// app.use(AuthenticateUser);

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
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
      extended: true,
    }),
    cookieParser(),
    cors()
  )
// Routes
app.use('/users', userRouter);
app.use('/packages', packageRouter);
app.use('/weddingBooking', BookingRouter);


// Default route
app.get('^/$|/Backend', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './static/index.html'));
});
app.use(errorHandling)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
