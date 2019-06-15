import { combineReducers } from  "redux";
import contentReducer from "../reducers/content"

export default combineReducers({
    content: contentReducer
})