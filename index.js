const express = require("express");

const connectDB = require("./Db");
const cors = require('cors')

const Router = require("./Router");

const server = express();
const port = 5000;

server.use(express.json());

server.use(cors());



connectDB();

server.use('/api/v1', Router);



server.listen(port, () => console.log(`Server is Running at port ${port}`));
