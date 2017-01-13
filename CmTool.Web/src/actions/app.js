
import * as actionTypeConst from '../constants/actionTypeConst';

export const onPageChange = (selectedPage) => (  
  {
  type: actionTypeConst.INC_PAGE_ID,
  selectedPage
})
