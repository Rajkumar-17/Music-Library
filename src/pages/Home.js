import React,{useState} from 'react';
import HeroSection from '../components/HeroSection/Hero.js';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data.js';
import Services from '../components/Services/index.js';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            
            
        </>
    );
};

export default Home;
