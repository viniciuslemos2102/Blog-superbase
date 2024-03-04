import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://bwqmvkrytghsvtemephp.supabase.co/rest/v1/',
    headers: {
        apikey: "",
        authorization: ""
    }
})