import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PacketAdministration from '../components/PacketAdministration';


const wellStyles = { maxWidth: 500, margin: '0 auto 10px' };



class PacketAdministrationApp extends Component {    
    constructor(props) {         
      super(props);     
  }
      
  render() {
      
      return (      
      <div>
       <PacketAdministration/>
      </div>
    );  
  }
  

  componentDidMount() {    
  }  
  componentWillUnmount() {
  }
}



export default connect() (PacketAdministrationApp)