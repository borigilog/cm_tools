import React, { PropTypes } from 'react';
//import { FormattedMessage } from 'react-intl';
import _ from 'lodash';

//import styles from './Select.sass';




class Select extends React.Component {
    static propTypes = {
        updateHandler: PropTypes.func,    
        errors: PropTypes.array,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        ref: PropTypes.string,                
        showLabel: PropTypes.bool,
        disabled: PropTypes.bool,
        options: PropTypes.array
    };

    static defaultPropTypes = {
        mandatory: false,
        showLabel: true,
        errors: []
    };

    constructor(props) {
        super(props);
        this.state = {
            options: {}
        };

        
    }

    hasErrors = () => !_.isEmpty(this.props.errors);


    options = () => {
        const options = _.map(this.props.options, (option) => {            
            return (                
                <option value={option.value} key={option.id}>
                    {option.value}
                </option>
            )
        })
        return options;
     };




    changeHandler = (event) => {        
        this.props.updateHandler(this.props.name, event.target.value, valueName);
    }

    render() {
        return (
            <div key={`select${name}`}>
                {
                    this.props.showLabel &&
                    <label htmlFor={this.props.name}>
                        {this.props.name}
                    </label>
                }
                <select
                    required={this.props.mandatory}
                    className={`input on-gray`}
                    key={`inputField${_.capitalize(name)}`}
                    name={this.props.name}
                    placeholder={this.props.name}
                    defaultValue={this.props.value}
                    onChange={this.changeHandler}
                    disabled={this.props.disabled}                    
                >                     
                 {this.options()}
                </select>                
            </div>
        );
    }
}

export default Select;
