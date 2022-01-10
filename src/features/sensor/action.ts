export const GET_SENSOR_LOADING = "GET_SENSOR_LOADING";
export const GET_SENSOR_SUCCESS = "GET_SENSOR_SUCCESS";
export const GET_SENSOR_FAILURE = "GET_SENSOR_FAILURE";

export const SET_SENSOR_LOADING = "SET_SENSOR_LOADING";
export const SET_SENSOR_SUCCESS = "SET_SENSOR_SUCCESS";
export const SET_SENSOR_FAILURE = "SET_SENSOR_FAILURE";

export const getSensorData = () => {
  return { type: GET_SENSOR_LOADING };
};

export const setSensorData = (payload: any) => {
  console.log(payload);
  return { type: SET_SENSOR_LOADING, payload };
};
