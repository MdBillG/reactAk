import  {createContext} from 'react'

const UserContext = createContext({
    user:{
        name:'Bilal',
        age:34
    }})

    export default UserContext