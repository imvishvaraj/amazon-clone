import axios from 'axios';

const instance = axios.state({
    baseURL: '...'      // The API (cloud function) URL
});

export default instance;