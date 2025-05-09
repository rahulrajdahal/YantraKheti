import Api from "app/api";
import { ofType } from "redux-observable";
import { flatMap, map } from "rxjs/operators";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_LOADING,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
} from "./action";

const api = new Api();

export const registerEpic = (action$: any) =>
  action$.pipe(
    ofType(REGISTER_USER_LOADING),
    flatMap(async (action: any) => {
      try {
        const response = await api.registerUser(action.payload);
        return { payload: response, addToast: action.addToast };
      } catch (e) {
        return false;
      }
    }),
    map((action: any) => {
      if (action.payload) {
        action.addToast("User registered successfully.");
        return { type: REGISTER_USER_SUCCESS, payload: action.payload };
      } else {
        return { type: REGISTER_USER_FAILURE, payload: false };
      }
    })
  );

export const loginEpic = (action$: any) =>
  action$.pipe(
    ofType(LOGIN_USER_LOADING),
    flatMap(async (action: any) => {
      try {
        const response = await api.loginUser(action.payload);
        return {
          payload: response,
          navigate: action.navigate,
          addToast: action.addToast,
        };
      } catch (e) {
        return false;
      }
    }),
    map((action: any) => {
      if (action.payload) {
        action.addToast("User Logged in.");
        action.navigate("/dashboard");
        return { type: LOGIN_USER_SUCCESS, payload: action.payload };
      } else {
        return { type: LOGIN_USER_FAILURE, payload: false };
      }
    })
  );

export const logoutEpic = (action$: any) =>
  action$.pipe(
    ofType(LOGOUT_USER_LOADING),
    flatMap(async (action: any) => {
      try {
        const response = await api.logoutUser();
        return { payload: response };
      } catch (e) {
        return false;
      }
    }),
    map((action: any) => {
      if (action.payload) {
        return { type: LOGOUT_USER_SUCCESS, payload: action.payload };
      } else {
        return { type: LOGOUT_USER_FAILURE, payload: false };
      }
    })
  );
