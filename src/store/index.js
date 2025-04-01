import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemSlice";
import fetchStatusSlice from "./fetchingStatusSlice";
import BagSlice from "./BagSlice";
const myntraStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bags: BagSlice.reducer
    }
})
export default myntraStore;