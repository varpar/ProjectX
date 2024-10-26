export const getProjects = async () => {
    const response = await fetch('http://localhost:8008/projects/');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};
