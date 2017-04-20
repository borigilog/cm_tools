import fetchModuleAdministration from '../actions/fetchModuleAdministration';
import * as actionTypeConst from '../constants/actionTypeConst';

const moduleAdmin = (state = [], action) => {
    switch (action.type) {
        case actionTypeConst.GET_All_REQUEST:

            var moduleAdministration = fetchModuleAdministration();
            return [
                ...state,
                moduleAdministration
            ]
        case actionTypeConst.SELECT_REQUEST:
            return state
        default:
            return state
    }
};


export default moduleAdmin

