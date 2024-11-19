import React, { useState } from 'react';
import bennar from ".././../../public/images/nike-joyride.jpg";
import { useLoaderData } from 'react-router-dom';
import ShoesCard from '../ShoesCard';

const Home = () => {
  const loderShoes=useLoaderData();
  const [shoes,setShoes]=useState(loderShoes)
    return (
        <div className='mt-10'>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${bennar})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Nike.Just Do it</h1>
      <p className="mb-5">
      Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton,
       Oregon, United States. It is the world's largest supplier of athletic shoes and apparel and a major 
      manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.
      </p>
      <button className="btn btn-warning ">Get Started</button>
    </div>
  </div>
</div>
    <div className='mt-10'>
    <h1 className="text-3xl font-bold">Our product list : {shoes.length}</h1>
    <p className=' mt-2'>Nike produces a wide range of sports equipment and apparel. Their first
       products were track running shoes. Nike Air Max is a line of shoes first released by Nike, Inc.
        in 1987. Additional product lines were introduced later, such as Air Huarache, which debuted in 1992.
       a high-performance basketball shoe designed with the environment in mind.</p>
    <div className='grid md:grid-cols-3 gap-3'>
          {
            shoes.map(shoe=><ShoesCard
            key={shoe._id}
            shoe={shoe}
            setShoes={setShoes}
            shoes={shoes}
            ></ShoesCard>)
          }
    </div>

    </div>
        </div>
    );
};

export default Home;