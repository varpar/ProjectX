import { useState, useEffect } from 'react'
import { getProjects } from '../Methods/getProjects'
import ProjectCard from './Components/ProjectCard'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Components/Create';
import Login from './Components/Login';


function App() {

  const [projects, setProjects] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
   
    const getAll = async () =>{
      try{
        const all = await getProjects();
        setProjects(all);
      }
      
      
      catch(err){
        console.log(err);
      }
      finally{
        setLoading(false);
      }
    }

    getAll();


  }, []);

  return (
    <>
<Router>

      <Navbar/> 

      <Routes>

      <Route path="/" element={(
          <div className='w-[100%]  justify-between px-4 gap-2 grid grid-cols-3'>
            {projects.map((project) => (
            
              <ProjectCard 
                key={project._id} 
                username={project.username}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        )} />

        <Route path='/Create' element={<Create/>}/>
        <Route path='/Login' element={<Login/>}/>



      
      </Routes>
      </Router>
    </>
  )
}

export default App
