import Card from "./Card";
import Bucket from "./Bucket";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  Card,
  Bucket,
});

export default rootReducer;
