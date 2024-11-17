import React, { useEffect, useState } from 'react';
import { getProjects } from '../Methods/getProjects'; // Correct import path
import './ProjectCard.css';

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects(); // Call getProjects method
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p className="loading-text">Loading projects...</p>;
  }

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project._id}
            className="project-card"
          >
            <div className="project-header">
              <p className="text-sm font-semibold text-gray-500">By: {project.username}</p>
            </div>

            <div className="project-details">
              <h3 className="text-2xl font-bold text-[#333] mb-2">{project.title}</h3>
              <p className="text-base text-gray-700">{project.description}</p>
            </div>

            <div className="project-footer">
              <button className="view-details-btn">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
