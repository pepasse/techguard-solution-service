// API Client pour communiquer avec le backend Laravel

const API_BASE_URL = 'http://localhost:8000/api'; // À adapter selon votre environnement

class APIClient {
    constructor(baseUrl = API_BASE_URL) {
        this.baseUrl = baseUrl;
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        try {
            const response = await fetch(url, {
                ...options,
                headers,
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            if (response.status === 204) {
                return null;
            }

            return await response.json();
        } catch (error) {
            console.error('API Request Error:', error);
            throw error;
        }
    }

    // SERVICES
    getServices() { return this.request('/services'); }
    createService(data) { return this.request('/services', { method: 'POST', body: JSON.stringify(data) }); }
    getService(id) { return this.request(`/services/${id}`); }
    updateService(id, data) { return this.request(`/services/${id}`, { method: 'PUT', body: JSON.stringify(data) }); }
    deleteService(id) { return this.request(`/services/${id}`, { method: 'DELETE' }); }

    // PROJECTS
    getProjects() { return this.request('/projects'); }
    createProject(data) { return this.request('/projects', { method: 'POST', body: JSON.stringify(data) }); }
    getProject(id) { return this.request(`/projects/${id}`); }
    updateProject(id, data) { return this.request(`/projects/${id}`, { method: 'PUT', body: JSON.stringify(data) }); }
    deleteProject(id) { return this.request(`/projects/${id}`, { method: 'DELETE' }); }

    // CONTACTS
    submitContact(data) { return this.request('/contacts', { method: 'POST', body: JSON.stringify(data) }); }
    getContacts() { return this.request('/contacts'); }
    getContact(id) { return this.request(`/contacts/${id}`); }
    updateContact(id, data) { return this.request(`/contacts/${id}`, { method: 'PUT', body: JSON.stringify(data) }); }
    deleteContact(id) { return this.request(`/contacts/${id}`, { method: 'DELETE' }); }
}

const apiClient = new APIClient();
