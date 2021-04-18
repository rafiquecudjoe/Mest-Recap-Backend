const express = require('express')

const UserModel = require('./Usermodel');

const Router = express();

Router.post("/login", function (request, response) {
    
    response.status(300).send("Hello World")
})

Router.post("/signup", async function (request, response) {

    const {firstname , lastname, email , country, username, password, cpassword} = request.body
    
   
    let newUser = new UserModel({ firstname, lastname, email, country, username, password, cpassword,country })
    
    //saves the user
    let responseData = await newUser.save()


    response.status(200).send({message:"You have successfully signup",data: responseData})
})




module.exports = Router;