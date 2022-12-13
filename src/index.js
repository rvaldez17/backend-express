require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.port || 3000;
const xApiKey = process.env.X_API_KEY || 'tryme';

const apiKeyMiddleware = async (req, res, next) => {
    const inputXApiKey = req.headers['x-api-key'];
    if(!inputXApiKey)
        return res.sendStatus(401);
    if(inputXApiKey === xApiKey)
        return next()
    else
        return res.sendStatus(403);
}

app.get('/', apiKeyMiddleware, (req, res) => {
    res.sendStatus(201);
});

app.post('/location', apiKeyMiddleware, (req, res) => {
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`Server start on port: ${port}`)
})