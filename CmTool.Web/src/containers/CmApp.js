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
     currentPageIdx : PropTypes.number.isRequired    
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
        switch(this.props.currentPageIdx)
        {
            case 1:                
                return <JenkinsBuildApp/>;                
            case 2: 
                return <FeatureAdministrationApp/>;                
            case 3:
                return  <CustomerAdministrationApp/>;                
            case 4:
                return <ModuleAdministrationApp/>;                
            case  5:               
              return <PacketAdministrationApp/>;

          default:
          
         }         
      }
}


const mapStateToProps =  (state) => {
   let res = {
    currentPageIdx : state.app.selectedPage
  };
  return res;  
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(onPageChange, dispatch)
  };
}


export default connect(mapStateToProps ,mapDispatchToProps)(CmApp)
