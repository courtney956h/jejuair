import React from 'react';
import Header from '../components/Header';
import HomeSection   from '../components/HomeSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="wrap">
            <Header />
            <HomeSection />
            <Footer />
        </div>
    );
};

export default Home;