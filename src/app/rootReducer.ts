import authReducer from "features/auth/reducer";
import sensorReducer from "features/sensor/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  auth: authReducer,
  sensor: sensorReducer,
});
