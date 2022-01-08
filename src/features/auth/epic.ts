import Api from "app/api";
import { ofType } from "redux-observable";
import { flatMap, map } from "rxjs/operators";
import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
} from "./action";

const api = new Api();

export const registerEpic = (action$: any) =>
  action$.pipe(
    ofType(REGISTER_USER_LOADING),
    flatMap(async (action: any) => {
      try {
        const response = await api.registerUser(action.payload);
        return { payload: response };
      } catch (e) {
        console.log(e);
        return false;
      }
    }),
    map((action: any) => {
      if (action.payload) {
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
        return { payload: response };
      } catch (e) {
        console.log(e);
        return false;
      }
    }),
    map((action: any) => {
      if (action.payload) {
        return { type: LOGIN_USER_SUCCESS, payload: action.payload };
      } else {
        return { type: LOGIN_USER_FAILURE, payload: false };
      }
    })
  );
