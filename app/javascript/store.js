import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  greeting: '',
};

const SET_GREETING = 'SET_GREETING';

export const setGreeting = (greeting) => ({
  type: SET_GREETING,
  greeting,
});

export const fetchGreeting = () => {
  return (dispatch) => {
    return fetch('/api/greetings/random')
      .then((response) => response.json())
      .then((data) => dispatch(setGreeting(data.message)))
      .catch((error) => console.error(error));
  };
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETING:
      return {
        ...state,
        greeting: action.greeting,
      };
    default:
      return state;
  }
};

const store = createStore(greetingReducer, applyMiddleware(thunkMiddleware));

export default store;
