import pic1 from '../../images/info1.svg';
import pic2 from '../../images/info2.svg';
import pic3 from '../../images/info3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'Lotify Music',
    headline: 'Unlimited Music & Song with Zero fees',
    description: 'Get access to our exclusive app that allows you to listen to exclusive songs without getting charged any fees',
    buttonLabel: 'Discover',
    imgStart: false,
    img: pic1,
    alt: 'pic1',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: pic2,
    alt: 'pic2',
    dark: false,
    primary: false,
    darkText: true,
};


export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 5 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Login',
    imgStart: true,
    img: pic3,
    alt: 'pic3',
    dark: false,
    primary: false,
    darkText: true,
};
