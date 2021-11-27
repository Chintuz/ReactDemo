import { combineReducers } from 'redux';
import ProfileReducer from './profileList/profileList.Reducer';

/**
 * This will combine allreducers to generate single store object
 */
const appReducer = combineReducers({
    profile: ProfileReducer,
});

const allReducers = (state, action) => appReducer(state, action);
export default allReducers;
