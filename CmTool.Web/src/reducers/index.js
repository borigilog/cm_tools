import {combineReducers} from 'redux';
import customers from './customer';
import module from './moduleAdmin';
import app from './app';

const reducerCollection = {
    module,
    customers,
    app
};


 
const cmApp = combineReducers(
    reducerCollection
  );


export default cmApp;