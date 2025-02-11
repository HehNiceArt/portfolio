const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';
const API_KEY = process.env.REACT_APP_API_KEY;

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

export const api = {
    get: async (endpoint) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, { headers });
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    },
    post: async (endpoint, data) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    }
};

export const endpoints = {
    images: '/api/images',
    animations: '/api/animations',
    posts: '/api/posts'
}; 