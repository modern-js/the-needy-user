const app = require('express')();
let count =0;
app.get("/food", (req, res) =>{
    if(count<=9){
        res.json({food: "Burger"});
        count++;
    }
    else{
        res.send({error:404});
    }
} );
app.get("/drink", (req, res) =>
{
    if(count<=9){
        res.json({drink: "Coke"});
        count++;
    }
    else{
        res.send({error:404});
    }
});
app.get("/tv", (req, res) =>{
    if(count<=9){
        res.json({tv: "Tv"});
        count++;
    }
    else{
        res.send({error:404});
    }
}); 

 
module.exports = app;
