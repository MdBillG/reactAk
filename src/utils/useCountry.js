import { Country_Value } from "../components/constants"
import {useState} from 'react'

const  useCountry =() =>{
const [country,setCountry]= useState('')
   
const handleChange =(e) =>{
setCountry(e.target.value)
}

const countyOptions = Country_Value.map(x=>(<option value={x.name} key={x.name}>{x.name}</option>))
return {
    country,
    handleChange,
    countyOptions


}

}

export default useCountry;
