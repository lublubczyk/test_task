import { configureStore } from "@reduxjs/toolkit";

import { eventsReducer } from "./slices";

const store = configureStore({
    reducer: {
        events: eventsReducer,

    }
});

export { store };