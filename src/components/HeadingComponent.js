
import {useState} from 'react';
import { Title } from "./Title";

export const HeadingComponent = () => {
  const[controlLogin,setControllogin] =useState(false);

return (
    <div className="header">
   <Title/>
      <div className="nav-items" >
        <ul>
         <li>Home</li>
         <li>About</li>
         <li>Contact</li>
         <li>Cart</li>
        </ul>
      </div> 
 {controlLogin ? ( <button onClick={()=> setControllogin(false)}>Login</button>) 
  :  (<button onClick={()=> setControllogin(true)} >Logout</button>)}
    </div>

);
}