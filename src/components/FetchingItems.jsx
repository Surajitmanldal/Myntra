import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchingStatusSlice";

const FetchingItems = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchItems = async () => {
            if (fetchStatus.apiFetchDone) return;
            try {
                const response = await fetch('https://shopping-api-1-4b71.onrender.com/items');
                const data = await response.json();
                dispatch(fetchStatusActions.markFetchDone());
                dispatch(itemsActions.addInitialItems(data.items[0]));
                dispatch(fetchStatusActions.markFetchingEnded())
            }
            catch (error) {
                console.error("Error fecthing items", error);
            }

        };

        fetchItems();
    }, [fetchStatus])

}
export default FetchingItems;