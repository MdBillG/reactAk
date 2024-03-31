import {useRouteError } from "react-router-dom";

const Error =()=>{
      const err = useRouteError();
      const {status,statusText} = err
 return (
          <div>
            <h1>Opps</h1>
            <h2>Something Went Wrong</h2>
            <h4>{status +" "+ statusText}</h4>
          </div>
        )
}
export default Error