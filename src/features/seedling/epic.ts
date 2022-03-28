import Api from "app/api";
import { ofType } from "redux-observable";
import { flatMap, map } from "rxjs";
import {
  GET_SEEDLING_FAILURE,
  GET_SEEDLING_LOADING,
  GET_SEEDLING_SUCCESS,
} from "./action";

const myApi = new Api();

export const getSeedlingDataEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_SEEDLING_LOADING),
    flatMap(async (action: any) => {
      try {
        const response = await myApi.getSeedData(action.payload);
        return { payload: response };
      } catch (e) {
        console.log(e);
        return { error: false };
      }
    }),
    map((action: any) => {
      if (action.payload) {
        return { type: GET_SEEDLING_SUCCESS, payload: action.payload };
      } else {
        return { type: GET_SEEDLING_FAILURE, payload: action.error };
      }
    })
  );
