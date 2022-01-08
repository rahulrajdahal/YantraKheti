import {
  GET_SENSOR_FAILURE,
  GET_SENSOR_LOADING,
  GET_SENSOR_SUCCESS,
} from "./action";
import { SensorState } from "./types";

const initialState: SensorState = {
  data: {},
  loading: false,
  error: false,
};

const sensorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SENSOR_LOADING:
      return { ...state, loading: true };

    case GET_SENSOR_SUCCESS:
      return { ...state, data: action.payload, loading: false };

    case GET_SENSOR_FAILURE:
      return { ...state, data: {}, loading: false, error: true };

    default:
      return state;
  }
};

export default sensorReducer;
