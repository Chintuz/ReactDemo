import { all } from 'redux-saga/effects';
import { watchProfileList } from './profileList/profileList.Saga'

/**
 * rootSaga, A root Saga aggregates multiple Sagas to a
 *  single entry point for the sagaMiddleware to run
 * Here, the all effect is used with an array and your sagas will be executed in parallel
 */
function* rootSaga() {
  yield all([
    watchProfileList(),
  ]);
}

export default rootSaga;
