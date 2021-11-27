import * as types from "./profileList.Types";
import appState from "././profileList.State";

/**
 * profileListReducer, The reducer is a pure function that takes the previous state and an action, and returns the next state. (previousState, action) => nextState.
 */
const profileReducer = (state = appState.profle, action) => {
    /**
     * @param {Object|string} state, action - state is the previousState and action is the particular action type.
     */
    switch (action.type) {

        case types.GET_PROFILE_LIST_SUCCESS: {
            return {
                ...state,
                listData: action.payload,
                errorMessage: ""
            };
        }

        case types.GET_PROFILE_LIST_ERROR: {
            return {
                ...state,
                errorMessage: action.payload,
                listData: []
            };
        }

        default:
            return state;

    }
}