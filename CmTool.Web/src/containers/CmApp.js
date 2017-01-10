import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import logo from '../public/favicon.ico';
import '../assets/stylesheets/App.css';
import fetchCustomer from '../actions/customer';
import {pageChange} from '../actions/app'; 
import JenkinsBuildApp from './JenkinsBuildApp';
import HeaderApp from './HeaderApp'
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
 
 static PropTypes = {
     pageChange :  PropTypes.func.isRequired
 }

    render() {
        const { actions } = this.props;
        return (
            
          <div> 
           <HeaderApp onPageChange = {this.pageChange}/>
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

function mapState(state) {
  return {
    selectedPage : state.app.selectedPage
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(pageChange, dispatch)
  };
}


export default  connect(mapState,mapDispatch)(CmApp)
