
import {useEffect, useState} from 'react'
import RestaurantCard from "./RestaurantCard"
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { FETCH_RESTAURANTS } from './constants';
import useOnline from '../utils/useOnline';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';


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

const online= useOnline()

const {user,setUser} =useContext(UserContext)

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
   const response  =await fetch(FETCH_RESTAURANTS);
  
   const resonseData = await response.json()
    console.log('resonseData',resonseData);
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

  if(!online)
  {
    return <h1>Check you internet Connection</h1>
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

    <input value={user?.age}
     onChange={e=>{setUser({
      ...user,
      age:e.target.value
     })}}/>
     <input value={user?.name}
     onChange={e=>{setUser({
      ...user,
      name:e.target.value
     })}}/>
    
    <button onClick={handleToggle}>{toggle}</button>
    <div className="restaurantLIst">
     { (searchedRestraunts.length>0) ?  searchedRestraunts.map((restraunt) => {
          return <Link to ={'/restaurant/'+restraunt?.id}>
         <RestaurantCard {...restraunt} /></Link>
        }) : <h1>No Restruants Matches</h1>
     }
      </div></>
  )
}