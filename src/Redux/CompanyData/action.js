import axios from "axios";
export const companyActions = {
  GET_COMPANY_REQUEST: "GET_COMPANY_REQUEST",
  GET_COMPANY_SUCCESS: "GET_COMPANY_SUCCESS",
  GET_COMPANY_FAILURE: "GET_COMPANY_FAILURE",
  ADD_COMPANY_REQUEST: "ADD_COMPANY_REQUEST",
  ADD_COMPANY_SUCCESS: "ADD_COMPANY_SUCCESS",
  ADD_COMPANY_FAILURE: "ADD_COMPANY_FAILURE",
};

export const getCompanyRequest = () => ({
  type: companyActions.GET_COMPANY_REQUEST,
});

export const getCompanySuccess = (data) => ({
  type: companyActions.GET_COMPANY_SUCCESS,
  payload: data,
});

export const getCompanyFailure = () => ({
  type: companyActions.GET_COMPANY_FAILURE,
});

export const getCompany = () => (dispatch, getState) => {
  const companyRequestAction = getCompanyRequest();
  dispatch(companyRequestAction);
  return axios({
    url: "http://localhost:8080/company",
    method: "GET",
  })
    .then((res) => {
      const companySuccessAction = getCompanySuccess(res.data);
      dispatch(companySuccessAction);
    })
    .catch((err) => {
      const companyFailureAction = getCompanyFailure();
      dispatch(companyFailureAction);
    });
};

export const addCompanyRequest = () => ({
  type: companyActions.ADD_COMPANY_REQUEST,
});

export const addCompanySuccess = () => ({
  type: companyActions.ADD_COMPANY_SUCCESS,
});

export const addCompanyFailure = () => ({
  type: companyActions.ADD_COMPANY_FAILURE,
});

export const addCompany =
  ({ title }) =>
  (dispatch) => {
    const companyRequestAction = addCompanyRequest();
    dispatch(companyRequestAction);
    return axios({
      url: "http://localhost:8080/company",
      method: "POST",
      data: {
        title,
        status: false,
      },
    })
      .then((res) => {
        const companySuccessAction = addCompanySuccess();
        dispatch(companySuccessAction);
      })
      .catch((err) => {
        const companyFailureAction = addCompanyFailure();
        dispatch(companyFailureAction);
      });
  };
