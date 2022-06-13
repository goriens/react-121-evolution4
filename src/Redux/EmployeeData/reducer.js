import { EMPLOYEEActions } from "./action";

const EMPLOYEEInitialState = {
  loading: false,
  EMPLOYEE: [],
  error: false,
};
export const EMPLOYEEReducer = (state = EMPLOYEEInitialState, action) => {
  switch (action.type) {
    case EMPLOYEEActions.GET_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EMPLOYEEActions.GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        EMPLOYEE: action.payload,
      };
    case EMPLOYEEActions.GET_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case EMPLOYEEActions.ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EMPLOYEEActions.ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case EMPLOYEEActions.ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
