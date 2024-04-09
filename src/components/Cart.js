import { useSelector } from "react-redux"

const Cart =()=>{
    const cartItems = useSelector(store=> store.cart.items)
    console.log('cartItemsCartPage',cartItems);
    return(
<div>
    this is cart page
</div>

    )
}

export default Cart