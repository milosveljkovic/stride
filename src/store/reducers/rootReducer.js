import { firestoreReducer } from 'redux-firestore';
import  authReducer  from './authReducer';
import updateReducer from './updateReducer'
import jobReducer from './jobReducer'
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    update:updateReducer,
    projects:jobReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;