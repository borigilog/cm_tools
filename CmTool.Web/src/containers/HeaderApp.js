import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Header from '../components/Header'

class HeaderApp extends Component
{
    constructor (props)
    {
        super(props)
    }

    render()
    {
        resturn(
            <div>
             <HeaderApp/>
            </div>
        );
    }
}

export default connect()(HeaderApp)