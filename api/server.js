const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express(),
      port = 3080;

// const users = require('MOCK_DATA.json');
const users = JSON.parse(fs.readFileSync('MOCK_DATA.json'));

app.use(express.static('../app/build'));

app.get('/api/users', (req, res) => {
    res.send('hello');
    res.send(users);
});

app.get('/api/users/:userId', (req, res) => {
    const foundUser = users.find(user => user.id == req.params.userId);
    if (foundUser) {
        res.send(foundUser);
    }
    else {
        res.sendStatus(404);
    }
});

app.get('/', (req,res) => {
    res.sendFile('../app/build/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});