require('dotenv').config()


// imports
const express = require('express')
const cors = require('cors')


// variables
const app = express()
const port = process.env.PORT || 4000;


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// importing database
const db = require("./src/models");
const Role = db.role;

// db.sequelize.sync();  // in production mode use this and comment the bottom code
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
}


// landing page route
app.get('/', (req, res)=>{
    res.send({
        "message": "Welcome to the Platform!"
    })
})

// importing other routes
require('./src/routes/auth.routes')(app);
require('./src/routes/user.routes')(app);

// server working on port
app.listen(port, ()=>{
    console.log(`server is up and running on ${port}`);
})