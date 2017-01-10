import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
//import logo from '../public/favicon.ico';
import '../assets/stylesheets/App.css';
import fetchCustomer from '../actions/customer';
import {selectedKey} from '../actions/app'; 
import JenkinsBuildApp from './JenkinsBuildApp';
import Header from '../components/Header'
/*
import {ModuleAdministration, ModuleAdminVm} from '../components/ModuleAdministration'
import {PacketAdministration} from '../components/PacketAdministration';
import {FeatureAdministration} from '../components/FeatureAdministration';
import {CustomerAdministration} from '../components/CustomerAdministration';
*/


class CmApp extends Component {
    constructor(props) {         
        super(props);
                       
    }


    render() {
        return (
          <div> 
           <Header/>
           <JenkinsBuildApp/>              
           </div> 
      );
    }
     
    getPageById()
    {
    /*    let id = key;
        switch(id)
        {
            case 1:                
                return <JenkinsBuild/>;
                break;
            case 2: 
                return <FeatureAdministration/>;
                break;
            case 3:
                ReactDOM.render(<CustomerAdministration/>,document.getElementById('rootPages'));
                break;
            case 4:
                ReactDOM.render(<ModuleAdministration vm={new ModuleAdminVm()} />, document.getElementById('rootPages'));
        break;
            case  5:              
              ReactDOM.render(<PacketAdministration/>,document.getElementById('rootPages'));
              break;
          default:
         }
         */
      }


  handleSelect(id)
  {
      /*
   key = id;
   ReactDOM.unmountComponentAtNode(React.findDOMNode('curPage').parentNode);
   ReactDOM.render();   
   */
  }
}

let  key = 1;
export default  connect(null, {selectedKey})(CmApp)
