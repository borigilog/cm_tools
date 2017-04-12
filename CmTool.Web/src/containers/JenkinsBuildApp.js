import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as customerActions from '../actions/customer';
import {fetchCustomerFromServer}   from '../actions/fetchCustomerFromServer';
import JenkinsBuild from '../components/JenkinsBuild';






class JenkinsBuildApp extends Component {

    static propTypes = {
        fetchCustomerFromServer : PropTypes.func.isRequired
    }

    componentDidMount() {        
      //  var dp = this.props.fetchCustomerFromServer();       
    }
    
    render(){
          const { todos, actions } = this.props;
          return (<JenkinsBuild> </JenkinsBuild>) ;          
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

export default connect(null, {fetchCustomerFromServer} )(JenkinsBuildApp);
