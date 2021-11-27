import axios from 'axios';

export const api = (baseurl) => {
    const apim = axios.create({
        baseURL: baseurl,
        headers: {
            'X-Requested-With': XML_REQ,
            Accept: APP_JSON,
            'Content-Type': APP_JSON,
        },
    });

    return apim;
}