import React,{createContext} from 'react'
import Userform from './Userform'
export const Client=createContext();
const UserContext = () => {
    const ClientInfo={
        username:"ayush",
        password:"123456"
    }
  return (
    
    <Client.Provider value={ClientInfo}>
       <Userform />
    </Client.Provider>
  )
}

export default UserContext;  