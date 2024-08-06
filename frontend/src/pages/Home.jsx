import React from 'react';
import Navbar from "../Components/navbar";
import CoursesGrid from "../Components/CoursesGrid";
import BannerBg from "../assets/Banner Background.png";
import './styles.css';
import AboutUs from '../Components/aboutus';

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="home-content">
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        {"Stay Ahead with StepWithin:"}
                    </h1>
                    <h2 className="primary-heading">
                        {"Your Child's Success Story Begins Here!"}
                    </h2>
                </div>
                <div className="home-banner-container">
                    <img src={BannerBg} alt="Banner" />
                </div>
            </div>
            <CoursesGrid/>
            <AboutUs/>
        </div>
    );
}

export default Home;
