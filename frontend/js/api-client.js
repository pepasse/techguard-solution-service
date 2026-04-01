// api-client.js

const apiBaseUrl = 'https://api.example.com';

export async function getContacts() {
    const response = await fetch(`${apiBaseUrl}/contacts`);
    return response.json();
}

export async function createContact(data) {
    const response = await fetch(`${apiBaseUrl}/contacts`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return response.json();
}

export async function getProjects() {
    const response = await fetch(`${apiBaseUrl}/projects`);
    return response.json();
}

export async function createProject(data) {
    const response = await fetch(`${apiBaseUrl}/projects`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return response.json();
}

export async function updateProject(id, data) {
    const response = await fetch(`${apiBaseUrl}/projects/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return response.json();
}

export async function deleteProject(id) {
    const response = await fetch(`${apiBaseUrl}/projects/${id}`, {
        method: 'DELETE'
    });
    return response.json();
}

export async function getServices() {
    const response = await fetch(`${apiBaseUrl}/services`);
    return response.json();
}

export async function login(email, password) {
    const response = await fetch(`${apiBaseUrl}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    });
    return response.json();
}

export async function logout() {
    const response = await fetch(`${apiBaseUrl}/logout`, {
        method: 'POST'
    });
    return response.json();
}