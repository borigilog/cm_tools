import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomerAdministration from '../components/CustomerAdministration';


class CustomerAdministrationApp extends Component {    
    constructor(props) {         
      super(props);
  }
  
 
  render() {
      return (      
      <div>        
        <CustomerAdministration/>     
      </div>
    );  
  }
  

  componentDidMount() {    
  }  
  componentWillUnmount() {
  }
}

export default connect()(CustomerAdministrationApp)