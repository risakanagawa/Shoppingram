import { combineReducers } from 'redux';
import authReducer from './authReducer'
import articleReducers from './articleReducers';
import searchTermReducer from './serchTermReducer'
import { reducer as FormReducer} from 'redux-form'
 
export default combineReducers({
    auth: authReducer,
    articles: articleReducers,
    searchTerm: searchTermReducer,
    form : FormReducer
});