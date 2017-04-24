import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModuleAdministration, ModuleAdminVm } from '../components/ModuleAdministration';
import { fetchModuleAdministration, XXX}      from '../actions/fetchModuleAdministration';


const wellStyles = { maxWidth: 500, margin: '0 auto 10px' };



class ModuleAdministrationApp extends Component {    
    constructor(props) {         
      super(props);
  }
      
    static PropTypes =
    {
        modAdmin: PropTypes.object,
        fetchModuleAdministration: PropTypes.func.isRequired
    }
        
    static modAdmin = () => {                       
        let f = fetchModuleAdministration();                
        var a = f((obj) => {                     
            return obj;            
        });     

        alert(Object.keys(xxx));
        return xxx;
        //alert(Object.keys(a));
    }


  render() {
      return (      
          <div>        
          
      </div>
    );  
  }
 
 
  componentDidMount() {      
      //var a = ModuleAdministrationApp.modAdmin();
      //alert(1);
      //alert(a);
  }  

  componentWillUnmount() {
  }
}


const mapStateToProps = (state, ownProps) =>
{

}

export default connect(mapStateToProps, { fetchModuleAdministration} )(ModuleAdministrationApp)
