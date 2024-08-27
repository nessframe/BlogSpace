import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1>Welcome to blog app!</h1>
                <p>let's check posts: <Link to="/BlogSpace/posts">GO</Link></p>
            </div>
        </div>
    );
};

export default Home;