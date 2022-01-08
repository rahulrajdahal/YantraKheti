import { loginEpic, registerEpic } from "features/auth/epic";
import { getSensorDataEpic } from "features/sensor/epic";
import { combineEpics } from "redux-observable";

export const rootEpic = combineEpics(
  registerEpic,
  loginEpic,
  getSensorDataEpic
);
