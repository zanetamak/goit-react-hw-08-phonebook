import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleAsyncActions = (state, action) => {
  state.isLoading = false;
  state.error = action.error ? action.payload : null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        action => [fetchContacts, addContact, deleteContact].some(type => action.type === type.pending.type),
        handlePending
      )
      .addMatcher(
        action => [fetchContacts, addContact, deleteContact].some(type => action.type === type.fulfilled.type),
        (state, action) => {
          handleAsyncActions(state, action);
          if (action.type === fetchContacts.fulfilled.type) {
            state.items = action.payload;
          } else if (action.type === addContact.fulfilled.type) {
            state.items.push(action.payload);
          } else if (action.type === deleteContact.fulfilled.type) {
            const index = state.items.findIndex(contact => contact.id === action.payload.id);
            state.items.splice(index, 1);
          }
        }
      )
      .addMatcher(
        action => [fetchContacts, addContact, deleteContact].some(type => action.type === type.rejected.type),
        handleAsyncActions
      );
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export default contactsSlice.reducer;