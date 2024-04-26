import React from 'react'
import { useParams } from 'react-router-dom'
const Userprofile = () => {
    let {userId} = useParams();
  return (
    <div>

        <h1> 
        user profile page 
        </h1>
        <p>
            user id : {userId}
        </p>
    </div>
  )
}

export default Userprofile