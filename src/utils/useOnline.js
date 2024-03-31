import { useState,useEffect } from "react"

const useOnline = () =>{
const [isOnline,setIsOnline] = useState(true)

const handleOffline =()=>{
    setIsOnline(false)
}
const handleOnline =()=>{
    setIsOnline(true)
}

useEffect(()=>{
window.addEventListener('online',handleOnline)
window.addEventListener('offline',handleOffline)
return ()=>{
window.removeEventListener('online',handleOnline)
window.removeEventListener('offline',handleOffline)
}
},[])





return isOnline;

}

export default useOnline