import authReducer from "features/auth/reducer";
import { seedlingReducer } from "features/seedling/reducer";
import { sensorReducer, setSensorReducer } from "features/sensor/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  auth: authReducer,
  sensor: sensorReducer,
  setSensor: setSensorReducer,
  seedling: seedlingReducer,
});
