import * as types from "./profileList.Types";

/**
 * clearSearchState, this will not take any argument and it clears the search text input
 */
export const getProfileList = () => {
    return {
        type: types.GET_PROFILE_LIST,
    };
};
