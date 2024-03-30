import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import Shimmer from './Shimmer'
import { IMG_CDN_URL } from './constants'

const RestaurantMenu = () =>{
    const [restaurantMenu,setRestaurantMenu] =useState()
    const {id} = useParams()




      useEffect(()=>{
        if (!restaurantMenu) { 
            getRestauranMenu();
          }
      },[restaurantMenu])

    async function getRestauranMenu (){
      const fetchData =await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}`)
      const response = await fetchData.json()
      const restrauntDetail = response?.data?.cards[2]?.card?.card?.info
      if(restrauntDetail){
    setRestaurantMenu (restrauntDetail)
      } 
    }

      return (!restaurantMenu) ? <Shimmer/> :  (
        <>
              <div>
                  this is Restaurnt Menu Page {id}
              </div>
              <div>
                <img src={IMG_CDN_URL+restaurantMenu?.cloudinaryImageId}/>
                <h2>{restaurantMenu?.name}</h2>
                    <h2>{restaurantMenu?.costForTwo}</h2>
                <h2>{restaurantMenu?.locality}</h2>
                <h2>{restaurantMenu?.city}</h2>
              </div>
        </>
          )
}

export default RestaurantMenu