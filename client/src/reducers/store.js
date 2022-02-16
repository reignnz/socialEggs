import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './userReducer';
import dataReducer from './dataReducer';
import uiReducer from './uiReducer';

const initialState = {};

const middleware = [thunk];

const loadState = () => {
    try {
        const savedState = localStorage.getItem("IdToken");
        if (savedState == null) {
            return null;
        } 
        return savedState;
    } catch (err) {
        return null;
    }
}

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    token: loadState,
    UI: uiReducer
});

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;

