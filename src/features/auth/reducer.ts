import {
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_LOADING,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./action";
import { AuthState } from "./types";

const initialState: AuthState = {
  userData: {},
  loading: false,
  error: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_USER_LOADING:
    case LOGIN_USER_LOADING:
    case LOGOUT_USER_LOADING:
      return { ...state, loading: true };

    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return { ...state, userData: action.payload, loading: false };

    case LOGOUT_USER_SUCCESS:
      return { ...state, userData: {}, loading: false };

    case REGISTER_USER_FAILURE:
    case LOGIN_USER_FAILURE:
    case LOGOUT_USER_FAILURE:
      return { ...state, userData: {}, loading: false, error: true };

    default:
      return state;
  }
};

export default authReducer;
