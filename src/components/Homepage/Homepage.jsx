import React from 'react';
import Banner from './Banner';
import Service from './Services';
import About from './About';


const Homepage = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
           <Service></Service>
            
        </div>
    );
};

export default Homepage;