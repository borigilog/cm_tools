import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import $ from 'jquery'
import App from './containers/App';
import reducer from './reducers';


const store = createStore(reducer)

  
ReactDOM.render(
    <AppContainer>       
     <App store={store}/>
    </AppContainer>,    
document.getElementById('react-container')
);


//store.dispatch({
//    type: 'INC_PAGE_ID',
 //   selectedKey:  2    
//})



//console.log( store.getState());
