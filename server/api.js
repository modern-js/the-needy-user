const api = require('express')();
app.get("/food", (req, res) => res.json({message: "Welcome to our Bookstore!"}));


module.exports = api;
