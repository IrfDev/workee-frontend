import { FORM_SUBMIT, NEW_OBJECT } from "../actions/Forms";

const formsReducer = (state = {}, action) => {
  switch (action.type) {
    case FORM_SUBMIT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case NEW_OBJECT:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default formsReducer;
