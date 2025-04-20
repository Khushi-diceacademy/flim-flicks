import React from "react";
import { Link } from "react-router-dom";

function HorizontalCards({ data }) {
    console.log(data);
    
    return (
        <div className='w-full  p-5' >
          <div className='mb-5'>
            <h1 className='text-3xl font-semibold text-zinc-400'>Trending</h1>
          </div>
          <div className='w-[100%] flex  overflow-y-hidden'>
            {data.map((d, i) => (
              <div key={i} className='min-w-[16%] bg-zinc-900 mr-3 mb-3 rounded-lg'>
    
                <img className='w-full h-[50%] object-cover' src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`} alt="" />
    
                <div className=' text-white p-2 h-[60%]'>
                  <h1 className='text-sm font-semibold'>
                    {d.title || d.name || d.original_name || d.original_title}
                  </h1>
                  <p className='text-sm'>
                    {d.overview.slice(0, 30)}...
                    <span className='text-zinc-500'>more</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
}

export default HorizontalCards;
