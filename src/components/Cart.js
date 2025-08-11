import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart =() => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        // Dispatch an action to clear the cart
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-10 p-10">
           <h1 className="text-2xl font-bold"> Cart </h1>
           <div className="w-6/12 m-auto rounded-md border border-gray-300 p-5">
           <button className="p-2 m-2 bg-black text-white rounded-md " onClick={handleClearCart}>Clear Cart</button>
            <ItemList items={cartItems} />
           </div>
            </div>
    );
}
export default Cart;