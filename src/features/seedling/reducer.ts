import {
  GET_SEEDLING_LOADING,
  GET_SEEDLING_SUCCESS,
  GET_SEEDLING_FAILURE,
} from "./action";

const initialState = {
  data: {},
  loading: false,
  error: false,
};

export const seedlingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SEEDLING_LOADING:
      return { ...state, loading: true };

    case GET_SEEDLING_SUCCESS:
      return { ...state, data: action.payload, loading: false };

    case GET_SEEDLING_FAILURE:
      return { ...state, data: {}, loading: false, error: true };

    default:
      return state;
  }
};
