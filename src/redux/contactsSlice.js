import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { defaultContacts } from "data";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {list: defaultContacts},
    reducers : {

        add: {
            reducer(state, action) {
                state.list.push(action.payload);
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

        remove: (state, action) => {
            return {list: state.list.filter(contact => contact.id !== action.payload)}
        },

    },
});

const persistConfig = {
    key: 'contacts',
    storage,
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { add, remove} = contactsSlice.actions;