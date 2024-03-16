const express = require('express')
// const  bodyParser = require('body-parser')
const app = express()
const port = 3000

// import { verifyID } from './controller';
const controller = require('./profileController')

app.get('/', (req, res) => {
    res.send('Hello world')
})


app.use(express.json());
// register user
app.post('/confirm-id', (req, res) => {
    //  TODO: register
    const id = req.body;

    // TODO: validate address

    // TODO: verify id controller
    var userInfo = profileController.verifyID(id);

    return res.json(userInfo);
});


app.use(express.json());
app.post('/register', (req, res) => {
    const userInfo = req.body;


    try {
        // TODO: register controller

        profileController.register(userInfo);
        res.json({"message": "registered successfully"})

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
        user = profileController.login(body)
        res.json(user);

    } catch (err) {
        console.error(err)
        res.json({"message": "wrong phone number or password"})
    }

    // login controller
});


app.use(express.json())
app.get('/update-members', (req, res) => {
    // update members
    try {
        const members = req.body;

        profileController.updateMembers(members);
        

        res.json({"message": "members updated successfully"});
    } catch (err) {
        console.log(err);

        res.json({"message": "failed to update members"})
    }
})


app.use(express.json())
app.post('/add-skill', (req, res) => {
    try {
        const skills = req.body;

        profileController.addSkills(skills);

        res.json({"message": "skills successfully added."})

    } catch (err) {
        console.error(err);
        res.json({"message": "failed to add skill"})
    }
})


app.use(express.json())
app.post('log-request', (req, res) => {
    // add service log
    try {
        const log = req.body;

        controller.logRequest(log);

         res.json({"message": "request logged successfully"});

    } catch (err) {
        console.error(err);
        res.json({"message": "failed to create log"});
    }
})


app.use(express.json())
app.get('/request-logs/:location', (req, res) => {
    // get all log requests
    try {
        let location = req.params("location")
        let requestLogs = controller.getAllLogRequests(location);
        res.json(requestLogs);
    } catch (err) {
        console.error(err);
        res.json({"message": "failed to get logs"})        
    }
})



app.get('/skill-search/:skill', (req, res) => {
    // search for skills
    // returns a list of people that match the skill
    try {
        let skill = req.params("skill");
        let providers = controller.searchServiceProviders(skill);
        res.json(providers);
    } catch (err) {
        res.json({"message":"no match for skill"});
    }
})

app.get('/service-provider/:provider_id', (req, res) => {
    // get a service provider by their id
    try {
        let providerID = req.params("provider_id");
        let provider = controller.getServiceProvider(providerID);

        res.json(provider);
    } catch (err) {
        res.json({"message": "provider not found"})
    }
});


app.use(express.json())
app.post('requests/create/:uid', (req, res) => {
    try {
        let job = req.body;
        let uid = req.params("uid");
        controller.createJobRequest(job);

        res.json({"message": "service successfully requested"});
    } catch (err) {
        console.error(err);
        res.json({"message": "failed to create service request"});

    }
});

app.patch('/requests/decline/:request_id',(req, res) => {
    // declined job service request
});

app.patch('/requests/accept:/requst_id', (req, res) => {
    // accept jon service request
});


app.listen(port, () => {
    console.log(`MakasanaConnect API listening on port ${port}`)
})


// module.exports = {index}

