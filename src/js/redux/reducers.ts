/* tslint:disable no-commented-code */
/*
 * needed for pure Redux reducers
 *
    import * as reducers from "./reducersRedux";
 */
import * as reducers from "./reducersImmer";
/* tslint:disable no-commented-code */
/*
 * needed for Immer
 *
    import * as reducers from "./reducersImmer";
 */
export const getReducer = reducers.getReducer;
