import {
  formatError,
  login,
  runLogoutTimer,
  saveTokenInLocalStorage,
  signUp,
} from "../../services/AuthService";

export const SIGNUP_CONFIRMED_ACTION = "[signup action] confirmed signup";
export const SIGNUP_FAILED_ACTION = "[signup action] failed signup";
export const LOGIN_CONFIRMED_ACTION = "[login action] confirmed login";
export const LOGIN_FAILED_ACTION = "[login action] failed login";
export const LOADING_TOGGLE_ACTION = "[Loading action] toggle loading";
export const LOGOUT_ACTION = "[Logout action] logout action";

export function signupAction(email, password, history) {
  return (dispatch) => {
    signUp(email, password)
      .then((response) => {
        saveTokenInLocalStorage(response.data);
        runLogoutTimer(dispatch, response.data.expiresIn * 1000, history);
        dispatch(confirmedSignupAction(response.data));
        history.push("/");
      })
      .catch((error) => {
        const errorMessage = formatError(error.response.data);
        dispatch(signupFailedAction(errorMessage));
      });
  };
}

export function logout(history) {
  localStorage.removeItem("userDetails");
  history.push("/login");
  return {
    type: LOGOUT_ACTION,
  };
}

export function loginAction(email, password, history) {
  return (dispatch) => {
    // login(email, password)
    //     .then((response) => {
    let response = {
      data: {
        kind: "identitytoolkit#VerifyPasswordResponse",
        localId: "2iQhPs4gOGSoBXQNtF2iPvcK0r73",
        email: "demo@demo.com",
        displayName: "",
        idToken:
          "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwNWI0MDljNmYyMmM0MDNlMWY5MWY5ODY3YWM0OTJhOTA2MTk1NTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtY291cnNlLWI3OThlIiwiYXVkIjoicmVhY3QtY291cnNlLWI3OThlIiwiYXV0aF90aW1lIjoxNjc1NDE4ODExLCJ1c2VyX2lkIjoiMmlRaFBzNGdPR1NvQlhRTnRGMmlQdmNLMHI3MyIsInN1YiI6IjJpUWhQczRnT0dTb0JYUU50RjJpUHZjSzByNzMiLCJpYXQiOjE2NzU0MTg4MTEsImV4cCI6MTY3NTQyMjQxMSwiZW1haWwiOiJkZW1vQGRlbW8uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRlbW9AZGVtby5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.bjSwYfD0Boa8h2NSlbNRzCxhYOjyUo_uiXfHwFiXffrD40u3IMTU5olyUr74mCOZXFaUfB-3Rn3HXYm_lPpw35S5mnL1VhjHdZgKiBcpuR9Y_5xZ8ZYdzgylkz6E8_Xey6J14qvqB3B4QmDkdvUPNMXSumXbSqwBkOYgiaCZq3EbgCBl9a4qp8Aih3EDgVuOd_dU1TLXC6A6vuA61fkpDmcPjEfHPHqmK_JLjUApwT8GSb2qd6raEFJn_UhPqjYlkWXaLw4kyA0IprW2vRiXuJE7WY1lTfCjIPp_7uUV_4mwXMCS9wY-22bF-ogDX7BFTpA1pZeo9kHR0x0szVDnDg",
        registered: true,
        refreshToken:
          "APJWN8e5jKURO6x0SxbbBJYtbz9gjgV2CBaWD1zgRVf_V6AsTaQwrblJXddY476cU10APw38vlcXMd0K3hHqVthPYkCqin4v4bHPxYQudSyJgGJxsdwkGz5c_718_Q4ljPn3_Qez-NL-3z1cHstcVTL20SYTVB_KwHa3PIKxAJcq8rvaQp9fnDrwHSt3RR5NM32WBELX3HXE8LdZjSK6Hh2lR72MjMYCPg",
        expiresIn: "3600",
        expireDate: "2023-02-03T11:06:52.760Z",
        type: "Client",
      },
    };
    saveTokenInLocalStorage(response.data);
    runLogoutTimer(dispatch, response.data.expiresIn * 1000, history);
    dispatch(loginConfirmedAction(response.data));
    history.push("/dashboard");
    // })
    // .catch((error) => {
    //     const errorMessage = formatError(error.response.data);
    //     dispatch(loginFailedAction(errorMessage));
    // });
  };
}

export function loginFailedAction(data) {
  return {
    type: LOGIN_FAILED_ACTION,
    payload: data,
  };
}

export function loginConfirmedAction(data) {
  return {
    type: LOGIN_CONFIRMED_ACTION,
    payload: data,
  };
}

export function confirmedSignupAction(payload) {
  return {
    type: SIGNUP_CONFIRMED_ACTION,
    payload,
  };
}

export function signupFailedAction(message) {
  return {
    type: SIGNUP_FAILED_ACTION,
    payload: message,
  };
}

export function loadingToggleAction(status) {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  };
}
