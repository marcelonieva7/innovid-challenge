import {Action, State} from "./types";

const reducer = (state: State, action: Action): State => {
  const {type} = action;

  switch (type) {
    case "GET_DATA_OK": {
      return {
        ...state,
        charge: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case "GET_DATA_ERROR": {
      return {
        ...state,
        charge: 0,
        isOn: false,
        isLoading: false,
        error: action.payload,
      };
    }
    case "RETRY": {
      return {
        ...state,
        isOn: true,
        isLoading: true,
        error: null,
      };
    }
    case "PAUSE": {
      return {
        ...state,
        isOn: false,
      };
    }
    case "RESUME": {
      return {
        ...state,
        isOn: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
