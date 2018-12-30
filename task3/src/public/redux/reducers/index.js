import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

// import all reducer
import RootNavigator from '../../navigators/RootNavigator';
import authReducer from './auth';
import memeReducer from './meme';

const reducerRouter = createNavigationReducer(RootNavigator);

const reducers = combineReducers({
    router: reducerRouter,
    form: formReducer,
    auth: authReducer,
    meme: memeReducer
});

export default reducers;