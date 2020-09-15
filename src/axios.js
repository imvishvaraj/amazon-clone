import axios from 'axios';

const instance = axios.create({
    // deploy function using `firebase deploy --only functions`
    // and use that url for processing
    baseURL: 'http://localhost:5001/clone-7261a/us-central1/api'      // The API (cloud function) URL
});

export default instance;
