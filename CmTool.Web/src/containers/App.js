import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CmApp from './CmApp';
import { ControlLabel, FormControl, Button, ButtonGroup, MenuItem, DropdownButton, Form, FormGroup } from 'react-bootstrap';

export default class App extends Component {
  render() {      
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div> 
          <CmApp/>
        </div>
      </Provider>
    );
  }
}