import fetch from 'isomorphic-fetch'
import * as actionTypeConst from '../constants/actionTypeConst';

const apiUrl = __API_URL__;
const jenkinsApiUrl = apiUrl + '/jenkins';


const getCustomerRequest = ()=> {{actionTypeConst: types.GET_All_REQUEST }};

const parseJSON  = (response) => {
    return response.json();
};


const checkStatus = (response)  => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
};


const  getCustomerSuccess = (customers) => {
    return {
        type: types.GET_SUCCESS,
        customers: customers
    };
};



function handleApiError(error) {
    console.log('request failed', error)
}


const customerResponse = (data) => ({
  type: 'Success',
  collection: data
});


export function fetchCustomerFromServer() {
    return (dispatch) => {               
        fetch(jenkinsApiUrl, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(checkStatus)
        .then(parseJSON)
        .then(data => {
            dispatch( customerResponse(getCustomerSuccess(data)));
        })
        .catch(handleApiError);        
    };
}

