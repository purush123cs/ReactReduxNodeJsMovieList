import axios from 'axios';

export const loadEnvironment = async () => {
    const response = await axios.get('/config.json');

    try {
        return response.data;
    } catch (error) {
        console.error('Could not load config.json!!');
        return Promise.reject('Could not load config.json!!');
    }
};
