import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModuleAdministration, ModuleAdminVm } from '../components/ModuleAdministration';
import  fetchModuleAdministration  from '../actions/fetchModuleAdministration';


const wellStyles = { maxWidth: 500, margin: '0 auto 10px' };

class ModuleAdministrationApp extends Component {    
    constructor(props) {         
      super(props);
  }
  

    static PropTypes =
    {
        modAdmin: PropTypes.object
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