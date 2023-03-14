import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsFromAPI,
  addContactToAPI,
  removeContactFromAPI,
} from 'components/API/API';
import Notiflix from 'notiflix';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await fetchContactsFromAPI();
      return contacts;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await addContactToAPI(data);
      Notiflix.Notify.success('CONTACT ADDED');
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      const result = await removeContactFromAPI(id);
      Notiflix.Notify.info('CONTACT DELETED');
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
