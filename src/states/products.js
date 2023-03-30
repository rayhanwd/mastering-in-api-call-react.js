import { useReducer } from "../utils/lib";

export const initialState = {
  products: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, products: action.payload };
    // add more cases as needed
    default:
      return state;
  }
};

export const useProductReducer = () => useReducer(reducer, initialState);
