import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {onPageChange} from '../actions/app'; 
import Header from '../components/Header'




class HeaderApp extends Component
{
    constructor (props)
    {
        super(props)
    }

   // static propTypes = {  
  //    selectedPage : PropTypes.number
  //  }

    render()
    {
        return(
            <div>
             <Header onPageChange = { (e) =>
                {                   
                  this.props.onPageChange(e);
                }
            }/>
            </div>
        );
    }
}



function mapDispatchToProps(dispatch) {
  return {
    onPageChange: bindActionCreators(onPageChange, dispatch)
  };
}


export default  connect(null,mapDispatchToProps)(HeaderApp)