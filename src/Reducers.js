import { combineReducers } from 'redux';
import AuthReducer from './reducers/Authreducer';

const Reducers = combineReducers({
    auth:AuthReducer
});

export default Reducers;