import slice from './slice'
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        Result: slice
    }
})

export default store