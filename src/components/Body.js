
import {useEffect, useState} from 'react'
import RestaurantCard from "./RestaurantCard"
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

function filterData (searchInput, restaurant2)

{
const filterData = restaurant2.filter((res) => {
  return (
    res?.name?.toLowerCase().includes(searchInput.toLowerCase()) ||
    (res?.data?.costForTwoString &&
      res.data.costForTwoString.toLowerCase().includes(searchInput.toLowerCase()))
  );
});
return filterData
}

export const  Body = ()=>{
const[searchInput,setSearchInput] =useState('')
const [restaurant ,setRestaurant]=useState([])
const [searchedRestraunts,setSearchedrestraunts]=useState([])
const [toggle,setToggle] =useState('false')


const handleToggle=()=>{
  (toggle === 'false') ? setToggle('true') : setToggle('false')
}

const handleSearch =()=>{
  const  data = filterData(searchInput, restaurant); 
   setSearchedrestraunts(data);
   
}

 useEffect(()=>{
     getSwiggyRestrruants()
 },[])

  async function getSwiggyRestrruants(){
   const response  =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.679466959904303&lng=77.50065922737122&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const resonseData = await response.json()
   console.log('resonseData',resonseData)
   let restaurants = [];
  for (let i = 0; i <= 12; i++) {
    const cardRestaurants = resonseData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(x => x.info);
    if (cardRestaurants) {
        restaurants = [...restaurants, ...cardRestaurants];
    }
}
setRestaurant(restaurants);

  let searchedRestaurants = [];
   for (let i = 0; i <= 12; i++) {
    const cardRestaurants = resonseData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(x => x.info);
    if (cardRestaurants) {
        searchedRestaurants = [...searchedRestaurants, ...cardRestaurants];
    }
 }

setSearchedrestraunts(searchedRestaurants);
  }

 

  return restaurant?.length === 0 ? <Shimmer/> : (
    <>
    <div className="search-container">
      <input type="text" 
       className="searchInput"
        placeholder="search here"
         value={searchInput}
        onChange={(e)=>setSearchInput(e?.target?.value)}/>
      <button className="searchButton"
       onClick={handleSearch}>
        Search</button>{searchInput}
    </div>
    
    <button onClick={handleToggle}>{toggle}</button>
    <div className="restaurantLIst">

     { (searchedRestraunts.length>0) ?  searchedRestraunts.map((restraunt) => {
          return <Link to ={'/restaurant/'+restraunt?.id}>
            { console.log('restraunt?.data?.id}',restraunt?.id)}<RestaurantCard {...restraunt} /></Link>
        }) : <h1>No Restruants Matches</h1>
     
     }

      </div></>
  )
}