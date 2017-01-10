
import * as actionTypeConst from '../constants/actionTypeConst';

const initialState = {
 selectedPage  : 1
};



const app = (state = initialState , action) => {
    switch (action.type) {
        case  actionTypeConst.INC_PAGE_ID:
        let anObj = Object.assign({}, state, { selectedPage: action.selectedPage});            
            return anObj
        default:
            return state
    }
};


export default app;
