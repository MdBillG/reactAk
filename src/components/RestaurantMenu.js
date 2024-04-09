import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import Shimmer from './Shimmer'
import { IMG_CDN_URL,FETCH_RESTAURANTS_MENU } from './constants'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import { addItem } from '../utils/cartSlice'
import {useDispatch} from 'react-redux'

const RestaurantMenu = () =>{
    
    const {id} = useParams()

    const restaurantMenu = useRestaurantMenu(id)
    const dispatch = useDispatch()

    const handleAddItem =(restaurantMenu) =>{
      dispatch(addItem(restaurantMenu))
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
                <button onClick={()=>{handleAddItem(restaurantMenu)}}>
                  Add to Cart
                </button>
             
              </div>
        </>
          )
}

export default RestaurantMenu