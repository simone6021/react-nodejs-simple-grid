const express = require('express');
// const path = require('path');
const usersData = require('./services/userService');
const app = express(),
      port = process.env.NODE_EXPRESS_PORT || 3080;

// Simple wrapper to handle async calls errors.
const asyncRoute = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);


app.use(express.static('../app/build'));

app.get('/api/users', asyncRoute(async (req, res) => {
    res.send(await usersData.getUsers());
}));

app.get('/api/users/:userId', asyncRoute(async (req, res) => {
    const foundUser = await usersData.getUser(req.params.userId);
    if (foundUser) {
        res.send(foundUser);
    }
    else {
        res.sendStatus(404);
    }
}));

app.get('/', (req, res) => {
    res.sendFile('../app/build/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
