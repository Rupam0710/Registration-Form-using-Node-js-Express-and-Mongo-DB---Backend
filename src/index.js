const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const regis = require('../models/regis');
const connectToMongo = require('./mongodb');
connectToMongo();

app.use(express.json());
app.set("view engine","hbs");

const components = path.join(__dirname,'../components')
app.set("views",components);
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.render("registration");
})

app.post("/",async(req,res)=>{
    regis.create({
        username : req.body.username,
        email : req.body.email,
        password: req.body.password,
    })

    res.render("successful");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})