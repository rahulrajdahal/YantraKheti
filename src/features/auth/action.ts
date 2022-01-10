export const REGISTER_USER_LOADING = "REGISTER_USER_LOADING";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const LOGOUT_USER_LOADING = "LOGOUT_USER_LOADING";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";

export const register = (payload: any) => {
  return { type: REGISTER_USER_LOADING, payload };
};

export const login = (payload: any, navigate: any) => {
  return { type: LOGIN_USER_LOADING, payload, navigate };
};

export const logut = () => {
  return { type: LOGOUT_USER_LOADING };
};
