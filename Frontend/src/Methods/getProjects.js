// Mock data for projects
const mockProjects = [
    {
      _id: '1',
      username: 'user1',
      title: 'Project Alpha',
      description: 'This is a mock project description for Project Alpha.',
    },
    {
      _id: '2',
      username: 'user2',
      title: 'Project Beta',
      description: 'This is a mock project description for Project Beta.',
    },
    {
      _id: '3',
      username: 'user3',
      title: 'Project Gamma',
      description: 'This is a mock project description for Project Gamma.',
    },
  ];
  
  // Mock function to get projects
  export const getProjects = async () => {
    // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProjects);
      }, 1000);
    });
  };
  