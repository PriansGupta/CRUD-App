import Card from "./Card";
import Bucket from "./Bucket";
import CreateHistory from "./History";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  Card,
  Bucket,
  CreateHistory,
});

export default rootReducer;
