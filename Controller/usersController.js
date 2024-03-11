import express from 'express';
import bodyParser from 'body-parser';   
import {users} from '../model/index.js';
import { verifyAToken } from "../middleware/AuthenticateUser.js";

const userRouter = express.Router();

// Fetch users
userRouter.get('/', async (req, res) => {
    try {
        users.fetchUsers(req, res);

    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        });
    }
});


// Fetch user
userRouter.get('/:id', bodyParser.json(),(req, res) => {
    try {
         users. fetchUser(req,res);
        // if (!users) {
        //     return res.status(404).json({
        //         status: 404,
        //         msg: 'User not found'
        //     });
        // }
        // res.json(users);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: "Failed to retrieve a user"
        });
    }
});
// userRouter.get('/:id', async (req, res) => {
//     try {
//         await users.fetchUser(req, res);
//     } catch (e) {
//         res.status(500).json({
//             status: res.statusCode,
//             msg: 'Failed to retrieve a user'
//         });
//     }
// });
userRouter.post('/register', bodyParser.json(), (req, res)=>{
    users.register(req, res)
})
// Add a user
// userRouter.post('/register', express.json(), async (req, res) => {
//     try {
//         await users.createUser(req, res);
//     } catch (e) {
//         res.status(500).json({
//             status: res.statusCode,
//             msg: 'Failed to add a new user.'
//         });
//     }
// });



// Update a user
userRouter.patch('/update/:id', express.json(), async (req, res) => {
    try {
        await users.updateUser(req, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: "Failed to update a user"
        });
    }
});

// Delete a user
userRouter.delete('/delete/:id', async (req, res) => {
    try {
        await users.deleteUser(req, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: "Failed to delete a user."
        });
    }
});

// Login
userRouter.post('/login', express.json(), async (req, res) => {
    try {
        await users.login(req, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: "Failed to log in"
        });
    }
});

export { userRouter, verifyAToken };
