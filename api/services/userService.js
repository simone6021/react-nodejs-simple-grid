const fs = require('fs').promises;

// Let's add some realism: asynchronously load users every call.
async function loadUsers () {
    // const data = require('MOCK_DATA.json');
    const data = await fs.readFile('data/MOCK_DATA.json');
    return JSON.parse(data);
}

async function getUsers () {
    const users = await loadUsers();
    const listFields = [
        'id',
        'first_name',
        'last_name',
        'email'
    ];
    // One liner for filtering out some keys, defined in listFields array, from an object.
    return users.map(
        item => Object.fromEntries(Object.entries(item).filter(([key, value]) => listFields.includes(key)))
    );
}

async function getUser (id) {
    const users = await loadUsers();
    return users.find(user => user.id == id);
}

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
