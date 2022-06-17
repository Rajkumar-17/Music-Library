import React, {useState} from 'react';
import Video from './src/videos/video.mp4';
import { Button } from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowRight,
    ArrowForword
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
        <HeroBg> 
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg> 
        <HeroContent>
        <HeroH1>Lotify Music is the soundtrack of your life </HeroH1>
        <HeroP>
            Sign up for a new account today and listen 90+ Million
            free song from all over the World.
        </HeroP>
        <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true' dark='true'>
            Get started {hover ? <ArrowForword/> : <ArrowRight/>}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
