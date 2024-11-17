import React, { useState } from 'react';

const ProjectCard = ({ username, title, description }) => {

  const [Title, setTitle] = useState(title);
  const [Desc, setDesc] = useState(description);

  return (
    <div className='rounded-md border-[4px] border-[#8f202c] p-6 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white'>
      <div className='flex items-center justify-between'>
        <p className='text-sm font-semibold text-gray-500'>By: {username}</p>
      </div>

      <div className='flex-grow'>
        <h3 className='text-2xl font-bold text-[#333] mb-2'>{Title}</h3>
        <p className='text-base text-gray-700'>{Desc}</p>
      </div>

      <div className='mt-4'>
        <button
          className='bg-[#8f202c] hover:bg-[#a82834] text-white py-2 px-4 rounded-md transition-colors duration-300'
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
