import fetch from 'isomorphic-fetch'
import * as actionTypeConst from '../constants/actionTypeConst';



const apiUrl = __API_URL__;
const api = apiUrl + '/Module';


const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}


const apiResponse = (data) => (
    {
        type: 'Success',
        modAdmin: data
    });



export function fetchModuleAdministration() {
    return (dispatch) => {
        return fetch(api).then(checkStatus)
            .then((response) => response.json())
            .then(function (json) {
                dispatch(apiResponse(json));
            });
            //.catch(function (err) {
            //    console.log(err);     
            //    return err;
            //});        
    }
}