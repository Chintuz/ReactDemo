import axios from 'axios';

/**
 * This the axios object creation returns axios object
 * @param {string} baseurl  - base url for axios
 */
export const api = (baseURL) => {
    const apim = axios.create({
        baseURL,
    });

    return apim;
}