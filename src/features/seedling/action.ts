export const GET_SEEDLING_LOADING = "GET_SEEDLING_LOADING";
export const GET_SEEDLING_SUCCESS = "GET_SEEDLING_SUCCESS";
export const GET_SEEDLING_FAILURE = "GET_SEEDLING_FAILURE";

export const getSeedlingData = (payload: any) => {
  return { type: GET_SEEDLING_LOADING, payload };
};
