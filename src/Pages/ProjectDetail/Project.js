import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const { tools, details, name, client, server, live } = project;
    // console.log(project);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/AnikKDev/my-portfolio/main/public/projects.json')
            .then(res => res.json())
            .then(data => {
                // setProject(data);
                const foundProject = data.find(a => a.id == id)
                setProject(foundProject);
            })
    }, [id])
    return (
        <div className="sm:px-16 lg:px-28">
            <Swiper
                // className="w-3/4"
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                speed={200}
                delay={3000}
                // height={500}
                loop={true}
                rewind={true}
                navigation
                autoplay={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src={project.ss1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={project.ss2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={project.ss3} alt="" /></SwiperSlide>

            </Swiper>
            <h2 className="text-4xl text-center my-10">{name}</h2>

            <div className="flex justify-end my-4">
                <div>
                    <a className="rounded-md px-5 py-2  mx-2 border-2 border-gray-400 hover:border-primary hover:bg-primary hover:text-white" target='_blank' href={live}>Preview</a>
                    <a className="rounded-md px-5 py-2  mx-2 border-2 border-gray-400 hover:border-primary hover:bg-primary hover:text-white" target='_blank' href={client}>Client Side</a>
                    <a className="rounded-md px-5 py-2  mx-2 border-2 border-gray-400 hover:border-primary hover:bg-primary hover:text-white" target='_blank' href={server}>Server Side</a>
                </div>

            </div>
            <div className="my-10">
                <p>{details}</p>
            </div>
            <div>
                <h5 className="font-semibold text-lg">TOOLS:</h5>
                {
                    tools?.map(tool => <span className="mx-2 border-2 px-3 py-1 rounded-md border-gray-400">{tool}</span>)
                }
            </div>
        </div>
    );
};

export default Project;