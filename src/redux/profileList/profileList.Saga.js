import { call, takeLatest } from 'redux-saga/effects';
import * as types from './profileList.Types';
import * as apis from './profileList.Api';

/**
 * This is a method to get profile list data
 * @param {object} action
 */
export function* getProfileListData(action) {

    try {
        const response = yield call(apis.getProfileList);

        if (response && response.data) {
            console.log("response success -> ", JSON.stringify(response.data))
        } else {
            console.log("response other -> ", JSON.stringify(response.data))
        }
    } catch (e) {

    }

}

export function* watchProfileList() {
    yield takeLatest(types.GET_PROFILE_LIST, getProfileListData);
}
