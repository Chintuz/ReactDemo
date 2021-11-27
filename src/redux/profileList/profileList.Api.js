import { api } from '../config/api';
import { apiRoutes, BASE_URL } from '../config/routes';

/**
 * Method to get profile list
 */
export const getProfileList = () => {

    return api(BASE_URL)
        .get(apiRoutes.productList)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}