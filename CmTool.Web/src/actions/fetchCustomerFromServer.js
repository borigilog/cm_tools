import fetch from 'isomorphic-fetch'
import * as actionTypeConst from '../constants/actionTypeConst';





export const Customer_FETCHING = 'CONTINGENT_FETCHING';
export const Customer_FETCH_SUCCESSFUL = 'CONTINGENT_FETCH_SUCCESSFUL';
export const Customer_FETCH_ERROR = 'CONTINGENT_FETCH_ERROR';


const apiUrl = __API_URL__;
const jenkinsApiUrl = apiUrl + '/Module';


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

