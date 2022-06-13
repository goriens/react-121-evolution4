import { companyActions } from "./action";

const companyInitialState = {
  loading: false,
  company: [],
  error: false,
};
export const companyReducer = (state = companyInitialState, action) => {
  switch (action.type) {
    case companyActions.GET_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case companyActions.GET_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        company: action.payload,
      };
    case companyActions.GET_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case companyActions.ADD_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case companyActions.ADD_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case companyActions.ADD_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
