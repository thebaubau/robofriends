import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  serchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action})
      // return { ...state, searchField: action }
  
    default:
      return state;
  }
}