import Api from "app/api";
import { ofType } from "redux-observable";
import { flatMap, map } from "rxjs/operators";
import {
  GET_SENSOR_FAILURE,
  GET_SENSOR_LOADING,
  GET_SENSOR_SUCCESS,
} from "./action";

const api = new Api();
export const getSensorDataEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_SENSOR_LOADING),
    flatMap(async (action: any) => {
      try {
        const response = await api.getSensorValues();
        return { payload: response };
      } catch (e) {
        console.log(e);
        return false;
      }
    }),
    map((action: any) => {
      if (action.payload) {
        return { type: GET_SENSOR_SUCCESS };
      } else {
        return { type: GET_SENSOR_FAILURE };
      }
    })
  );
