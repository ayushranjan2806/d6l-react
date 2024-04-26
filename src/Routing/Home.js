import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // const navigate = useNavigate();
    // const location = useLocation();

    // const handleClick = () => {
    //     if (location.pathname === '/') {
    //         navigate('/about');
    //     } else if (location.pathname === '/about') {
    //         navigate('/');
    //     }
    // };

    return (
        <div>
            {/* <h1>Home Page components</h1>
            <button onClick={handleClick}>
                {location.pathname === '/' ? 'Go to the About Page' : 'Go Back Home'}
            </button> */}
            <h1>
                welcome to the home page
            </h1>
            <ul>
                <li>
                    <Link to="/user/1">USER 1 </Link>
                </li>
                <li>
                    <Link to = "/user/2">USER 2</Link>

                </li>
                <li>
                    <Link to = "/user/3">USER 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
