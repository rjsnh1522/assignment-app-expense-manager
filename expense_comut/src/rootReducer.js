import { combineReducers} from 'redux';
import user from './reducers/user';
import transactionReducer from './reducers/transactionReducer';



export default combineReducers({
  user,
  transactionReducer
});
