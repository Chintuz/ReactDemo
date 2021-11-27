import axios from 'axios';

export const api = (baseurl) => {
    const apim = axios.create({
        baseURL: baseurl,
    });

    return apim;
}