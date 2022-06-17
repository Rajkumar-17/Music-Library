import React from 'react';
import Icon1 from '../../images/icons/favIcon.png';
import Icon2 from '../../images/icons/playlistIcon.png';
import Icon3 from '../../images/icons/listenIcon.png';
import { ServicesWrapper,
    ServicesContainer, 
    ServicesH1,
    ServicesH2, 
    ServicesCard, 
    ServicesIcon, 
    ServicesP} from './ServicesElements';

const Services = () => {
    return (

        <ServicesContainer id="services">
            <ServicesH1>Why Lotify?</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Play your favorites.</ServicesH2>
                <ServicesP>Listen to the songs you love, and discover new music and podcasts.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Playlists made easy.</ServicesH2>
                <ServicesP>We'll help you make playlists. Or enjoy playlists made by music experts.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Make it yours.</ServicesH2>
                <ServicesP>Tell us what you like, and we'll recommend music for you.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

    )
}

export default Services
