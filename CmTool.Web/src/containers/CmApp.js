import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import logo from '../public/favicon.ico';
import '../assets/stylesheets/App.css';
import fetchCustomer from '../actions/customer';
import {onPageChange} from '../actions/app'; 

import HeaderApp from './HeaderApp'
import CustomerAdministrationApp from './CustomerAdministrationApp';
import JenkinsBuildApp from './JenkinsBuildApp';
import FeatureAdministrationApp from './FeatureAdministrationApp';
import ModuleAdministrationApp from './ModuleAdministrationApp';
import PacketAdministrationApp from './PacketAdministrationApp';

class CmApp extends Component {
    constructor(props) {         
        super(props);
                          
    }
 
 static PropTypes = {
     onPageChange :  PropTypes.func.isRequired,     
 }

 render() {     
        return (            
          <div> 
           <HeaderApp/>
           {this.getPageById()}
           </div> 
      );
    }

    getPageById()
    {   
        switch(currentPageIdx)
        {
            case 1:                
                return <JenkinsBuildApp/>;
                break;
            case 2: 
                return <FeatureAdministrationApp/>;
                break;
            case 3:
                <CustomerAdministrationApp/>;
                break;
            case 4:
                <ModuleAdministrationApp/>;
                break;
            case  5:              
              <PacketAdministrationApp/>;
              break;
          default:
         }         
      }
}


let currentPageIdx = 1;

function mapStateToProps(state) {
    if ( currentPageIdx  !== state.app.selectedPage)
    {
       currentPageIdx = state.app.selectedPage;
    }
  
  return 
  {
    selectedPageIdx : state.app.selectedPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(onPageChange, dispatch)
  };
}


export default  connect(mapStateToProps ,mapDispatchToProps)(CmApp)
