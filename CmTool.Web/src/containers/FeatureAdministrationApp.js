import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FeatureAdministration from '../components/FeatureAdministration';


class FeatureAdministrationApp extends Component {    
    constructor(props) {         
      super(props);
  }
  
 
  render() {      
      return (      
      <div>    
        <FeatureAdministration/>
      </div>
    );  
  }
  

  componentDidMount() {    
  }  
  componentWillUnmount() {
  }
}

export default connect()(FeatureAdministrationApp)