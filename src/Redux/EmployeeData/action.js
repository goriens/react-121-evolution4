import axios from "axios";
export const EMPLOYEEActions = {
  GET_EMPLOYEE_REQUEST: "GET_EMPLOYEE_REQUEST",
  GET_EMPLOYEE_SUCCESS: "GET_EMPLOYEE_SUCCESS",
  GET_EMPLOYEE_FAILURE: "GET_EMPLOYEE_FAILURE",
  ADD_EMPLOYEE_REQUEST: "ADD_EMPLOYEE_REQUEST",
  ADD_EMPLOYEE_SUCCESS: "ADD_EMPLOYEE_SUCCESS",
  ADD_EMPLOYEE_FAILURE: "ADD_EMPLOYEE_FAILURE",
};

export const getEMPLOYEERequest = () => ({
  type: EMPLOYEEActions.GET_EMPLOYEE_REQUEST,
});

export const getEMPLOYEESuccess = (data) => ({
  type: EMPLOYEEActions.GET_EMPLOYEE_SUCCESS,
  payload: data,
});

export const getEMPLOYEEFailure = () => ({
  type: EMPLOYEEActions.GET_EMPLOYEE_FAILURE,
});

export const getEMPLOYEE = () => (dispatch, getState) => {
  const EMPLOYEERequestAction = getEMPLOYEERequest();
  dispatch(EMPLOYEERequestAction);
  return axios({
    url: "http://localhost:8080/EMPLOYEE",
    method: "GET",
  })
    .then((res) => {
      const EMPLOYEESuccessAction = getEMPLOYEESuccess(res.data);
      dispatch(EMPLOYEESuccessAction);
    })
    .catch((err) => {
      const EMPLOYEEFailureAction = getEMPLOYEEFailure();
      dispatch(EMPLOYEEFailureAction);
    });
};

export const addEMPLOYEERequest = () => ({
  type: EMPLOYEEActions.ADD_EMPLOYEE_REQUEST,
});

export const addEMPLOYEESuccess = () => ({
  type: EMPLOYEEActions.ADD_EMPLOYEE_SUCCESS,
});

export const addEMPLOYEEFailure = () => ({
  type: EMPLOYEEActions.ADD_EMPLOYEE_FAILURE,
});

export const addEMPLOYEE =
  ({ name, company, email, phone, salary }) =>
  (dispatch) => {
    const EMPLOYEERequestAction = addEMPLOYEERequest();
    dispatch(EMPLOYEERequestAction);
    return axios({
      url: "http://localhost:8080/EMPLOYEE",
      method: "POST",
      data: {
        name,
        company,
        email,
        phone,
        salary,
      },
    })
      .then((res) => {
        const EMPLOYEESuccessAction = addEMPLOYEESuccess();
        dispatch(EMPLOYEESuccessAction);
      })
      .catch((err) => {
        const EMPLOYEEFailureAction = addEMPLOYEEFailure();
        dispatch(EMPLOYEEFailureAction);
      });
  };
