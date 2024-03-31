import { Link,Outlet } from "react-router-dom";


const About =()=>{
    return (
        <>
            <div>this  is About Page</div>
            <Link to='profile'> <button>Check the profile</button></Link>
              <Outlet /> 
            </>
       )
}
export default About;