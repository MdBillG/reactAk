import { useEffect,useState } from "react"
import { FETCH_RESTAURANTS_MENU } from "../components/constants"

const useRestaurantMenu =(id) =>{

    const [restaurantMenu,setRestaurantMenu] =useState()

    useEffect(()=>{
        if (!restaurantMenu) { 
            getRestauranMenu();
          }
      },[restaurantMenu])

    async function getRestauranMenu (){
      const fetchData =await fetch(`${FETCH_RESTAURANTS_MENU}${id}`)
      const response = await fetchData.json()
      const restrauntDetail = response?.data?.cards[2]?.card?.card?.info
      if(restrauntDetail){
      setRestaurantMenu (restrauntDetail)
      } 
    }

    return restaurantMenu;


}

export default useRestaurantMenu