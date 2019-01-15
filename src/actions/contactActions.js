import { FETCH_CONTACTS, FILTER_CONTACTS, NEW_CONTACT } from "./types";

export const fetchContacts = () => dispatch => {
  fetch(`/api/contacts?filter=`)
    .then(res => res.json())
    .then(contacts =>
      dispatch({
        type: FETCH_CONTACTS,
        payload: contacts
      })
    );
};

export const filterContacts = searchQuery => dispatch => {};

export const createContact = contactData => dispatch => {};
