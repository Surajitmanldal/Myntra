import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaBucket } from "react-icons/fa6";
const HomeItem = ({ item }) => {
    const bag = useSelector(store => store.bags);
    const dispatch = useDispatch();
    const handleAddToBag = () => {
        dispatch(bagActions.addToBag(item.id));
    }
    const handleRemoveBag = () => {
        dispatch(bagActions.removeFromBag(item.id));
    }

    const elementFound = bag.includes(item.id);
    return <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ?
            (<button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemoveBag}><FaBucket /> Remove</button>) :
            (<button type="button" className="btn btn-success btn-add-bag" onClick={handleAddToBag}><IoIosAddCircleOutline /> Add to Bag</button>)}
    </div>
}
export default HomeItem;