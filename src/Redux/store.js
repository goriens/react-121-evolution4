import { companyReducer } from "./CompanyData/reducer";
import { combineReducers } from "redux";
import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { EMPLOYEEReducer } from "./EmployeeData/reducer";

const rootReducer = combineReducers({
  companyReducer: companyReducer,
  EMPLOYEEReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
console.log("store", store.getState());
