import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://bwqmvkrytghsvtemephp.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3cW12a3J5dGdoc3Z0ZW1lcGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzMzExNjMsImV4cCI6MjAyNDkwNzE2M30.tAB8a3KKgX7KoaPX1r06t5y0ndnQdYXHyIYCrNqOKhI",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3cW12a3J5dGdoc3Z0ZW1lcGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzMzExNjMsImV4cCI6MjAyNDkwNzE2M30.tAB8a3KKgX7KoaPX1r06t5y0ndnQdYXHyIYCrNqOKhI"
    }
})