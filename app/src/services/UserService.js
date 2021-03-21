import axios from "axios";

export async function getAllUsers() {
    const endpoint = '/api/users';
    // const response = await fetch(endpoint);
    // return await response.json();
    const response = await axios.get(endpoint);
    return response.data;
}

export async function getUser(id) {
    const endpoint = `/api/users/${id}`;
    // const response = await fetch(endpoint);
    // return await response.json();
    const response = await axios.get(endpoint);
    return response.data;
}
