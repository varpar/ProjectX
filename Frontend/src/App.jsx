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
  const [loggedin, setloggedin] = useState(false);
  const [userInfo, setuserInfo] = useState({username:"User 69"});

  useEffect(() => {
   
    const getAll = async () =>{
      if(loggedin){

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
    }

    getAll();


  }, [loggedin]);

  return (
    <>
<Router>

      <Navbar/> 

      <Routes>

      <Route path="/" element={(
          <div className='w-[100%]  justify-between px-4 gap-2 grid grid-cols-3'>
            {userInfo.username}
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

        <Route path='/create' element={<Create userInfo={ userInfo }/>}/>
        <Route path="/login" element={<Login setloggedin={setloggedin} setuserInfo={setuserInfo} />} />



      
      </Routes>
      </Router>
    </>
  )
}

export default App
