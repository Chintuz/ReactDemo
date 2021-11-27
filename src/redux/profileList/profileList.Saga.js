import { call, takeLatest, put } from 'redux-saga/effects';
import * as types from './profileList.Types';
import * as apis from './profileList.Api';
import { setCacheData, getCacheData } from '../../utils/localStorage';
import key from '../../utils/storageKeys';
import { isProfileDataDiff } from '../../utils/utils';

/**
 * This is a method to get profile list data
 */
export function* getProfileListData() {

    try {
        let cachedProfileData = yield call(getCacheData, key.profileData);

        if (cachedProfileData && cachedProfileData[0]) {
            yield put({
                type: types.GET_PROFILE_LIST_SUCCESS,
                payload: cachedProfileData,
            });
        }

        const response = yield call(apis.getProfileList);

        if (response && response.data) {
            if (isProfileDataDiff(cachedProfileData, response.data)) {
                yield call(setCacheData, key.profileData, response.data);

                yield put({
                    type: types.GET_PROFILE_LIST_SUCCESS,
                    payload: response.data,
                });
            }
        } else {
            yield put({
                type: types.GET_PROFILE_LIST_ERROR,
                payload: response ? response.toString() : "error",
            });
        }
    } catch (e) {
        yield put({
            type: types.GET_PROFILE_LIST_ERROR,
            payload: "Error:" + e,
        });
    }

}

export function* watchProfileList() {
    yield takeLatest(types.GET_PROFILE_LIST, getProfileListData);
}
