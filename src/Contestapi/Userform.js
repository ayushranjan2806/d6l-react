import React, { useContext, useState } from 'react';
import { Client } from './Usercontext';

const Userform = () => {
  const userInfo = useContext(Client);
  const [inputuser, setInputuser] = useState("aaa");
  const [inputpassword, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleChangeUsername = (e) => {
    setInputuser(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if userInfo is available
    
    if (!userInfo) {
      console.error("Client context not provided!");
      return;
    }

    // Check if input matches userInfo
    if (inputuser === userInfo.username && inputpassword === userInfo.password) {
      setIsLogin(true);
    } else {
      console.error("Invalid username or password!");
    }

    // Reset input fields
    setInputuser("");
    setPassword("");
  };

  return (
    <>
      {isLogin ? (
        <>
          <h1>Username: {userInfo.username}</h1>
          <h1>Password: {userInfo.password}</h1>
          <button onClick={() => setIsLogin(false)}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter username:</label>
          <input 
            type="text" 
            id="username"
            value={inputuser} 
            onChange={handleChangeUsername} 
          />
          <br/>
          <label htmlFor="password">Enter password:</label>
          <input 
            type="password" 
            id="password"
            value={inputpassword} 
            onChange={handleChangePassword} 
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default Userform;
