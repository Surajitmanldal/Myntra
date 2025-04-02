import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
    const bag = useSelector(store => store.bags);
    const items = useSelector(store => store.items);
    const finalItems = items.filter((item) => {
        return bag.includes(item.id);
    });
    return (
        <main>
            <div className="bag-page">
                <div className="bag-items">
                    {finalItems.map((item) => <BagItem item={item} key={item.id} />)}
                </div>
                <BagSummary />
            </div>
        </main>
    )
}
export default Bag;