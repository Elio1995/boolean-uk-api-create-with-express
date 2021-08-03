
const express = require("express");

const petsRouter = express.Router();
const Pet = require("./model");

const { createOnePet }= Pet();

petsRouter.get("/", (req, res) => {
//   res.json({ msg: "pets" });
});

petsRouter.get("/:id", (req,res)=>{

})

petsRouter.post("/", (req, res)=>{
    let newPet = req.body
    createOnePet= (newPet, (resp)=>{
       res.json({newPet: resp}) 
    })
        
})

module.exports = petsRouter;