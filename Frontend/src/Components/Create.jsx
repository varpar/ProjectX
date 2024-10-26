import React, { useState } from 'react'

const Create = () => {

  const [Title, setTitle] = useState();
  const [Desc, setDesc] = useState();


  return (
    <>
    <div>Create a new entry...</div>
    <div  className='mx-auto flex flex-col   bg-red-400 p-4 max-w-[512px]'>
    <form action="POST" className='gap-4 flex flex-col'>
      <input type="text" placeholder='title' className='p-2   rounded-md '/>
      <input type="text" placeholder='description' className='p-2 rounded-md'   />
      <button type='button'>Create!</button>
    </form>
    </div>

    </>
  )
}

export default Create