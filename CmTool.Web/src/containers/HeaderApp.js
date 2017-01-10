import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header'

class HeaderApp extends Component
{
    constructor (props)
    {
        super(props)
    }

    static propTypes = {
       onPageChange :PropTypes.func.isRequired
    }

    render()
    {
        return(
            <div>
             <Header onPageChange = {this.props.onPageChange}/>
            </div>
        );
    }
}

export default connect()(HeaderApp)