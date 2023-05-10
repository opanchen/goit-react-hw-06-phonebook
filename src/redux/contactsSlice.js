import { createSlice, nanoid } from "@reduxjs/toolkit";
import { defaultContacts } from "data";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: defaultContacts,
    reducers : {

        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },

        deleteContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload) // ? --- ? --- ?
        },

    },
});

export const { addContact, deleteContact } = contactsSlice.actions;