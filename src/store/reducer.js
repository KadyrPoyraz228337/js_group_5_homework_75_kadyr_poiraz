import {DECODE, ENCODE, INPUT_CHANGE_HANDLER} from "./actions/actions";

const initialState = {
  encode: '',
  decode: '',
  password: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CHANGE_HANDLER:
            return {
              ...state,
              [action.e.target.name]: action.e.target.value
            };
        case ENCODE:
            return {
                ...state,
                encode: '',
                decode: action.data
            };
        case DECODE:
            return {
                ...state,
                decode: '',
                encode: action.data
            };
        default: return state;
    }
};

export default reducer;