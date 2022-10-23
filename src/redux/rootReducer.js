import { combineReducers } from "@reduxjs/toolkit";
import contacts from "./Contacts/Contacts-slice";
import filter from "./Filter/Filter-slice";


const contactReducer = combineReducers({
    contacts,
    filter,
})

export default contactReducer;