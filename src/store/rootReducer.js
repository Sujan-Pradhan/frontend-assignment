import { combineReducers } from "redux";
import {
  productDetailReducer,
  productReducer,
} from "../reducers/productReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  productDetails: productDetailReducer,
});
