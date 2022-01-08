import { loginEpic, registerEpic } from "features/auth/epic";
import { combineEpics } from "redux-observable";

export const rootEpic = combineEpics(registerEpic, loginEpic);
