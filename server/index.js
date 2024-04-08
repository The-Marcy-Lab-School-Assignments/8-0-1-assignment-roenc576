const express = require('express');
const app = express();
const path = require('path');
const pathToDistFolder = path.join(__dirname, '..', 'app', 'dist');

const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next(); // Passes the request to the next middleware/controller
};

const serveStatic = express.static(pathToDistFolder);

app.use(logRoutes);
app.use(serveStatic);

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));