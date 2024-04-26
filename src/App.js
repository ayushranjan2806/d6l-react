import React from 'react'
// import DarkMode from './Components/Darkmode'
import TodoList from './Components/Todolist'

const App = () => {
  return (
    <div>
      <TodoList/>
      {/* <DarkMode/> */}
    </div>
  )
}

export default App



// import React from "react";
// import Userform from "./Contestapi/Userform";
// import UserContext from "./Contestapi/Usercontext";

// import {


//   BrowserRouter as Router,Link,
//   Routes,Route
 
// } from "react-router-dom";

// function App() {
//   return (
//     // <UserContext>
//     //   <Userform/>
//     //   </UserContext>

// <Router>
//        <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>

//           </li>
//           <li>
//             <Link to="/profile">Users</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/profile" element={<Userprofile />} />
//       </Routes> 

//       </Router>

    
//   );
// }

// export default App;
