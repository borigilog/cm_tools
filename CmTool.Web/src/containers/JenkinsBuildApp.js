import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as customerActions from '../actions/customer';
import *   as customerActions  from '../actions/fetchCustomerFromServer';
import JenkinsBuild from '../components/JenkinsBuild';


class JenkinsBuildApp extends Component {
    componentDidMount() {        
    if (this.props.actions) {        
      this.props.actions.fetchCustomerFromServer();
    }
  }
    
    render(){
          const { todos, actions } = this.props;
          //return (<JenkinsBuild> </JenkinsBuild>) ;
          return (<div> </div>) ;
         }    
}


function mapState(state) {
  return {
    customers : state.customers
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(JenkinsBuildApp);
