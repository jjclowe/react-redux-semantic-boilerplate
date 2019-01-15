import { FETCH_CONTACTS, FILTER_CONTACTS, NEW_CONTACT } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        items: action.payload
      };
    // case FILTER_CONTACTS:
    // case NEW_CONTACT:
    default:
      return state;
  }
}
