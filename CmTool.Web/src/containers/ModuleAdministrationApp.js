import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ModuleAdministration,ModuleAdminVm} from '../components/ModuleAdministration';


const wellStyles = { maxWidth: 500, margin: '0 auto 10px' };



class ModuleAdministrationApp extends Component {    
    constructor(props) {         
      super(props);
  }
  
 
  render() {
      return (      
      <div>
       <ModuleAdministration vm={new ModuleAdminVm()}/>;
      </div>
    );  
  }
  

  componentDidMount() {    
  }  
  componentWillUnmount() {
  }
}

export default connect()(ModuleAdministrationApp)