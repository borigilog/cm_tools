
import * as actionTypeConst from '../constants/actionTypeConst';

export const pageChange = (selectedPage) => ({
  type: actionTypeConst.INC_PAGE_ID,
  selectedPage
})
