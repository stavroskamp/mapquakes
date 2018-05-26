import { combineReducers } from "redux";
import { TOGGLE_BUTTON } from "../actions";

const toggledButton = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return { ...state, buttonState: !state.buttonState };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  toggledButton
});

export default rootReducer;
