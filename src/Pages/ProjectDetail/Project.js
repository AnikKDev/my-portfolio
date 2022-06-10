import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            {id}
        </div>
    );
};

export default Project;