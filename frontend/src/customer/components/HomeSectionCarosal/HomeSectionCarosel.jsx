import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCards from "../HomeSectionCards/HomeSectionCards";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../Data/Mens_kurta";
import { useState } from "react";
const HomeSectionCarosel = ({data,sectionName}) => {
  const [activeIndex,setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item)


  const items =data.slice(0,10).map((item) => <HomeSectionCards product={item} />);
  console.log(items.length);
  return (
    <div className="border">
      <h2 className="text-2x1 font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex!==items.lenght-5 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "10rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)"
          }}
          color="white"
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>}

        
        {activeIndex!==0 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "10rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)"
          }}
          color="white"
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
