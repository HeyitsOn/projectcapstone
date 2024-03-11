import express from 'express';
import bodyParser from 'body-parser';
import { packages } from "../model/index.js";


const packageRouter = express.Router();

// Fetch all Packages
packageRouter.get('/', (req, res) => {
    try {
        packages.fetchPackages(req, res);
    } catch (e) {
        console.error("Failed to retrieve Packages:", e);
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to retrieve Packages. Please try again later.'
        });
    }
});

// Fetch a specific Package by ID
packageRouter.get('/:id', (req, res) => {
    try {
        packages.fetchPackage(req, res);
    } catch (e) {
        // console.error("Failed to retrieve a Package:", e);
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to retrieve a Package. Please try again later.'
        });
    }
});

// Add a new Package
packageRouter.post('/addPackage', bodyParser.json(), (req, res) => {
    try {
        packages.addPackage(req, res);
    } catch (e) {
        console.error("Failed to add a new Package:", e);
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to add a new Package. Please try again later.'
        });
    }
});

// Update a Package by ID
packageRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        packages.updatePackage(req, res);
    } catch (e) {
        console.error("Failed to update a Package:", e);
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to update a Package. Please try again later.'
        });
    }
});

// Delete a Package by ID
packageRouter.delete('/delete/:id', (req, res) => {
    try {
        packages.deletePackage(req, res);
    } catch (e) {
        console.error("Failed to delete a Package:", e);
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to delete a Package. Please try again later.'
        });
    }
});

export { packageRouter };
