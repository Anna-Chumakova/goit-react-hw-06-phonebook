import { configureStore } from '@reduxjs/toolkit';

import {reducerFilterSlice}  from './Filter/Filter-slice';
import {reducerContactsSlice} from './Contacts/Contacts-slice';

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';

// const contactsPersistConfig = {
//         key: 'root',
//         storage,
// }
    
// const persistedContactsReducer = persistReducer(contactsPersistConfig, contactReducer);


// export const store = configureStore({
//     reducer: {
//         contacts: persistedContactsReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });

// export const persistor = persistStore(store);

export const store = configureStore({
    reducer: {
        contacts: reducerContactsSlice,
        filter: reducerFilterSlice
    }
});