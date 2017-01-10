import * as actionTypeConst from '../constants/actionTypeConst';
import {fetchCustomerFromServer} from './fetchCustomerFromServer'


export const fetchCustomer = () => ({
  type: actionTypeConst.GET_All_REQUEST, 
  customers: fetchCustomerFromServer 
})





