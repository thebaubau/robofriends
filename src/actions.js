import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants"


export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

// Redux out of the box would not undestand this because it's not returning an object for an action
// We're returning a function and by adding redux-thunk it's now listening to actions
export const requestRobots = () => (dispatch) => {
  dispatch({type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }))
}

