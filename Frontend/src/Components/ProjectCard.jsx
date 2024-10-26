import React, { useState } from 'react'


const ProjectCard = ({username, title, description}) => {

  const [Title, setTitle] = useState();
  const [Desc, setDesc] = useState();


  return (
    <>
        <div className=' rounded-md border-[4px] border-[#8f202c] p-4 flex flex-col gap-4'>
            <p className='text-md'>{username}</p>
            <p className='text-4xl'>{title}</p>
            <p className='text-xl'>{description}</p>
        </div>
    
    </>
  )
}

export default ProjectCard