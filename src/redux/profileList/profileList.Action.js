import * as types from "./profileList.Types";

/**
 * getProfileList, this will set an action to get data for profile list
 */
export const getProfileList = () => {
    return {
        type: types.GET_PROFILE_LIST,
    };
};
