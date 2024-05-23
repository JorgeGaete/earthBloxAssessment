const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProviderModel = require("./models/Provider")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/earthblox");

const port = 5000;
app.listen(port, () => console.log(`Earthblox app listening on port ${port}!`));

app.get('/', (req, res) => res.send('Hello Multiverse!'));

app.post('/register', (req, res) => {
    ProviderModel.create(req.body)
        .then(provider => res.json(provider))
        .catch(err => res.json(error))
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    ProviderModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("Incorrect Password")
                }
            } else {
                res.json("No record in the DB")
            }
        })
        .catch(err => res.json(err))
});
