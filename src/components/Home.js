import React, { useState } from 'react'
import Cards from './Cards'
import Carousel from "react-elastic-carousel";

const Home = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);


  return (
    <>
      <h1 className='text-white text-center  text-2xl my-10'>Matches</h1>
      <div className="carousel-wrapper mb-10 max-w-7xl mx-auto">
        <Carousel breakPoints={breakPoints} showEmptySlots={true}>
          {items.map((item) => (
            <div className='mx-5'> <Cards /> </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Home