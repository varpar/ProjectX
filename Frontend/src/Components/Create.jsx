import React, { useState } from 'react'

const Create = ({ userInfo }) => {

  const [Title, setTitle] = useState('');
  const [Desc, setDesc] = useState('');
  const [error, seterror] = useState('');
  

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    seterror('')
    
    try{
      const response = await fetch('http://localhost:8008/projects', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userInfo.username, title: Title, description: Desc }),
      })

      if(response.ok){
        console.log(response)
        setDesc('')
        setTitle('')
      }
    }
   
    catch(err){
      setError('ERROR HAI BHAIII')
      console.log(err);
    }


  }


  return (
    <>
   <div>
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={Desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Create!</button>
      </form>
    </div>

    </>
  )
}

export default Create