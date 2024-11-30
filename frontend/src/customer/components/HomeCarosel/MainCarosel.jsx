import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';





const MainCarosel = () => {
    
    const items = MainCaroselData.map((item)=><img className='cursor-pointer -z-10' src={item.image} alt="" role="presentation"/>)
    return (<AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
    />)
    };

export default MainCarosel