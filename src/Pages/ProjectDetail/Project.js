import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/AnikKDev/my-portfolio/main/public/projects.json')
            .then(res => res.json())
            .then(data => {
                // setProject(data);
                const foundProject = data.find(a => a.id == id)
                setProject(foundProject);
            })
    }, [id, project])
    return (
        <div>

        </div>
    );
};

export default Project;