import { IMG_CDN_URL } from "./constants"
import Contact from "./Contact"

const RestaurantCard =({cloudinaryImageId,name,cuisines,costForTwoString})=>{
    return(
      <div className="card">
        <img src= {IMG_CDN_URL +
         cloudinaryImageId} alt="" />
        <h1>{name}</h1>
        <h3>{cuisines}</h3>
        <h3>{costForTwoString}</h3>
        
      </div>
    )
  }


  export default RestaurantCard