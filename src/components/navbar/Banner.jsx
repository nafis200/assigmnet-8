
import React, { useEffect } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Cards from '../cards/Cards';



const Banner = () => {
    
   const lod = useLoaderData();
   
    return (
        <div>
            
            <main className="container mx-auto">
           <div className="h-[500px]  bg-gray-200 w-full flex justify-between">
           
           <div className='ml-16 mt-32 p-8'>
             <p className=' text-3xl font-bold p-4'>Books to freshen up <br /> Your bookshelf </p>
             <NavLink to="/list"><button className='btn mt-3 bg-green-400 text-white'> View the list</button></NavLink>
           </div>

           <div className='mr-48 mt-5'>
             <img src={`https://i.postimg.cc/m2Z5mCGz/attachment-73513942.jpg`} className='h-[450px]' alt="" />
           </div>

           </div>
           </main>
             <Cards lod={lod}></Cards>
         </div>
    );
};

export default Banner;