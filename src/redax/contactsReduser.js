
import { createSlice } from "@reduxjs/toolkit";
const { LightTheme } = require("constants/DarkMode");


const INITIAL_STATE = {
	contacts: [],
	filter: '',
	modal: false,
	modalData: null,
	modalDelete: false,
	modalDeleteData: null,
	themes: LightTheme,
}

const contactsSlice = createSlice({
	// Ім'я слайсу
	name: 'contacts',
	// Початковий стан редюсера слайсу
	initialState: INITIAL_STATE,
	reducers: {
		setContacts(state, action) {
			state.contacts.push(action.payload);
		},
		setDeleteContacts(state, action) {
			state.contacts = state.contacts.filter(contact => contact.name !== action.payload);
		},
		setFilter(state, action) {
			state.filter = action.payload;
		},
		setModal(state, action) {
			state.modal = action.payload;
		},
		setModalData(state, action) {
			state.modalData = action.payload;
		},
		setModalDelete(state, action) {
			state.modalDelete = action.payload;
		},
		setModalDeleteData(state, action) {
			state.modalDeleteData = action.payload;
		},
		setTheme(state, action) {
			state.themes = action.payload;
		},
	},
});

export const { setContacts, setDeleteContacts, setFilter, setModal, setModalData, setModalDelete, setModalDeleteData, setTheme } =
	contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
