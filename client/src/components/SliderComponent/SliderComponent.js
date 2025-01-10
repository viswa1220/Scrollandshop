import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const sliderItems = [
  {
    category: "Creativity",
    headline: "Take your inner artist out and about.",
    image: "/airpod.png",
  },
  {
    category: "Learning",
    headline: "Your classroom can be anywhere.",
    image: "/smartwatch.png",
  },
  {
    category: "Entertainment",
    headline: "Kick back. Tune in. Game on.",
    image: "/headphones.png",
  },
  {
    category: "Combos",
    headline: "Everything in one place, unbeatable deals.",
    image: "/combos.png",
  },
  {
    category: "Shoes",
    headline: "Step up your style wherever you go.",
    image: "/shoes.png",
  },
  {
    category: "Covers & Straps",
    headline: "Protection meets fashion for every device.",
    image: "/cs.png",
  },
];

// Custom arrow components (optional)
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 z-10 flex items-center justify-center w-8 h-8 -mr-4 
                 text-white bg-gray-800 rounded-full cursor-pointer 
                 top-1/2 transform -translate-y-1/2 hover:bg-gray-700"
      onClick={onClick}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -ml-4 
                 text-white bg-gray-800 rounded-full cursor-pointer 
                 top-1/2 transform -translate-y-1/2 hover:bg-gray-700"
      onClick={onClick}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const SliderComponent = () => {
  const navigate = useNavigate();

  // react-slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // < 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // < 768px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // < 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Handle card click
  const handleClick = (categoryName) => {
    // Example: navigate to a specific route or do something else
    navigate(`/category/${categoryName}`);
  };

  return (
    <div className="w-full bg-white">
      {/* Optional Title */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Explore More Categories
        </h2>
      </div>

      <div className="relative px-8 md:px-16 lg:px-24 xl:px-32 pb-8">
        <Slider {...settings}>
          {sliderItems.map((item, idx) => (
            <div key={idx} className="px-2">
              <div
                className="
                 relative
w-full
h-[480px]        
rounded-xl       
overflow-hidden 
cursor-pointer 
   bg-gradient-to-t
from-black/90    
via-black/50     
to-transparent   

                  
                "
                onClick={() => handleClick(item.category)}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.headline}
                  className="
                    absolute 
                    inset-0 
                    w-full 
                    h-full 
                    object-cover
                  "
                />

                <div
                  className="
      absolute
      inset-0
      bg-gradient-to-b
      from-black/90
      via-black/5
      to-transparent
    "
                ></div>
                {/* Top Text */}
                <div
                  className="
    absolute 
    top-4 
    left-4 
    text-white
    /* semi-transparent dark background */
    px-2
    py-1
    rounded-md
    
  "
                >
                  <p className="text-xs uppercase font-semibold opacity-90">
                    {item.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mt-1">
                    {item.headline}
                  </h3>
                </div>

                {/* Bottom Right + Button (Optional) */}
                <button
                  className="
                    absolute 
                    bottom-4 
                    right-4
                    w-8 
                    h-8 
                    bg-black/50 
                    text-white 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center
                  "
                >
                  <span className="text-xl font-bold">+</span>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
