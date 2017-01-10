import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
//import logo from '../public/favicon.ico';
import '../assets/stylesheets/App.css';
import fetchCustomer from '../actions/customer';


export default class Header extends Component {
    constructor(props) {         
        super(props);                       
    }


   static propTypes = {
    onSelect: PropTypes.func.isRequired
   };


   handleSelect(selectedId)
   {
     this.props.onSelect(selectedId);
   }

    render()
    {
       return(
      
         <div className="App-header">
            <Navbar inverse collapseOnSelect fluid  defaultExpanded >          
              <h2>Rigilog Configuration Tool</h2>
                <Navbar.Header>              
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav  onSelect= {this.handleSelect}>
                    <NavItem  eventKey={1}>Jenkins-Build</NavItem>
                    <NavItem eventKey={2}>Feature Verwaltung</NavItem>                
                    <NavItem eventKey={3}>Kunden Verwaltung</NavItem>
                    <NavItem eventKey={4}>Modul Verwaltung</NavItem>
                    <NavItem eventKey={5}>Paket Verwaltung</NavItem>
                  </Nav>              
                </Navbar.Collapse>
              </Navbar>
              </div>                            
       );
    }
}