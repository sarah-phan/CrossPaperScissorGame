import {combineReducers} from "redux"
import gameReducer from "./reducer/option"

const rootReducer = combineReducers({
    gameReducer,
})

export default rootReducer;