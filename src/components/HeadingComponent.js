
import {useState} from 'react';
import { Title } from "./Title";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import {useSelector} from 'react-redux'


export const HeadingComponent = () => {
  const[controlLogin,setControllogin] =useState(false);

  const {user} = useContext(UserContext)

  const cartItems =useSelector(store =>store?.cart?.items)
  console.log('cartItems',cartItems);


return (
    <div className="header">
   <Title/>
      <div className="nav-items" >
        <ul>
        <Link to= '/'><li>Home</li></Link> 
        <Link to='/about'> <li>About</li></Link>
        <Link to = '/contact'><li>Contact</li></Link> 
        '<Link to ='/cart'> <li>Cart {cartItems?.length}</li></Link>
         <Link to='/instamart'><li>InstaMart</li></Link>
       
       <li>{user?.name }-{user?.age }</li>
        </ul>
      </div> 
    {controlLogin ? ( <button onClick={()=> setControllogin(false)}>Login</button>) 
  :  (<button onClick={()=> setControllogin(true)} >Logout</button>)}
    </div>

);
}