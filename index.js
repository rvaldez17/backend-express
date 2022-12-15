require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const pool = require('./db/db.js');
app.set('port', process.env.PORT || 3000)
app.use(cors({
        origin: 'http://localhost:4200',
        credentials: true

}))

app.use(express.json());

const port = process.env.PORT || 3000;
const xApiKey = process.env.XAPIKEY || 'tryme';

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

app.post('/location', apiKeyMiddleware, async (req, res) => {
    try {
        await pool.query(
            "INSERT INTO dbLocations.Location (latitude, longitude, dateT) VALUES(?,?,?)",
            [
                req.body.Latitude,
                req.body.Longitude,
                req.body.DateT
            ]);
        res.sendStatus(201).send();
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.listen(port, () => {
    console.log(`Server start on port: ${port}`)
})