const express = require('express')
// const  bodyParser = require('body-parser')
const app = express()
const port = 3000

// import { verifyID } from './controller';
const controller = require('./controller')

app.get('/', (req, res) => {
    res.send('Hello world')
})


// register user
app.post('/confirm-id', (req, res) => {
    //  TODO: register
    const id = req.body;

    // TODO: validate address

    // TODO: verify id controller
    var userInfo = controller.verifyID(id);

    return res.json(userInfo);
});


app.post('/register', (req, res) => {
    const {fullname,id, address, employmentStatus, incomeBracket, password} = req.body;


    try {
        // TODO: register controller

        controller.register({fullname,id, address, employmentStatus, incomeBracket, password});

    } catch (error) {
        // TODO: error handling
        res.json({"message": "failed to register user"});
        return
    }

    // controller.register process successful
    res.json({"message": "registration successful"});
});


app.use(express.json());
app.post('/login', (req, res) => {
    // TODO: login user

    

    try {
        const body = req.body;
        user = controller.login(body)
        res.json(user);

    } catch (err) {
        console.error(err)
        res.json({"message": "wrong phone number or password"})
    }

    // login controller
    
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// module.exports = {index}

