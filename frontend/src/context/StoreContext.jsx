import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);


const url = "http://localhost:4000"


const StoreContextProvider = (props) => {

    const [food_list,setFoodList] = useState([])
    const [token , setToken] = useState('');
    const [cartItems, setCartItems] = useState({});

    const  addToCart = async (itemId)  => {
        if(!cartItems[itemId]) { 
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId] : prev[itemId]+1}))
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeFromCart =async (itemId) => {
        if(token) {
            await axios.post(url + "/api/cart/remove",{itemId},{headers : { token }})
        }
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    const getTtotalItem = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = food_list.find((product)=> product._id===item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list")
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response =  await axios.post(url + "/api/cart/get", {}, {headers : {token}})
        setCartItems(response.data.cartData);
    }

    useEffect(()=> {
        if(localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
        async function loadData () {
            await fetchFoodList()
            if(localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData()
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTtotalItem,
        url,
        token,
        setToken
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])
    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;