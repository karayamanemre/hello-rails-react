const apiUrl = "http://localhost:3000/api/greetings";

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    dispatch({ type: "HELLO_HUMANS", payload: json });
  } catch (error) {
    console.error(error);
  }
};

const initialState = { message: "" };

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HELLO_HUMANS":
      return { message: action.payload.message };
    default:
      return state;
  }
};

export default greetingReducer;
