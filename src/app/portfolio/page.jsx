'use client'

import React, { useState } from 'react'
import { FaReact, FaNodeJs   } from 'react-icons/fa'
import { BsArrowUpRight } from "react-icons/bs";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiExpress   } from 'react-icons/si'
import TooltipComponent from '@/components/Tooltip'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const projects = [
    {
        number: '01',
        category: 'full Stack',
        title: 'Copyflix',
        description: 'Netflix-inspired UI replica where users can create accounts and manage favorite movie lists, showcasing practical API integration.',
        stack:[
            {icon: <SiNextdotjs />, name: 'Html 5'},
            {icon: <SiTailwindcss />, name: 'Tailwindcss'},
            {icon: <FaReact />, name: 'React'},
            {icon: <SiTypescript />, name: 'TypeScript'}
        ],
        image: '/assets/images/project1.png',
        link: 'https://copyflix.vercel.app/'
    },
    {
        number: '02',
        category: 'Full Stack E-commerce',
        title: 'Unknown',
        description: 'An ongoing subscription-based, full-stack e-commerce website for land sales, providing dynamic inventory management and exclusive access to property listings.',
        stack:[
            {icon: <SiMongodb  />, name: 'MongoDB'},
            {icon: <SiExpress />, name: 'Express.js'},
            {icon: <FaReact />, name: 'React'},
            {icon: <FaNodeJs  />, name: 'Node.js'},
            {icon: <SiTailwindcss />, name: 'Tailwindcss'},
        ],
        image: '/assets/images/project2.png',
        link: ''
    },

]

const Portfolio = () => {
    const [project, setProject] = useState(projects[0])

    const handleSwiper = (swiper) =>{
        const currentIndex = swiper.activeIndex

        setProject(projects[currentIndex])
    }

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 lg:py-0'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between gap-4'>
                    <div className='flex flex-col justify-center gap-8 '>
                        <a target='_blank' href={project.link}
                            className={`w-16 h-16  rounded-full flex items-center justify-center group cursor-pointer dark:bg-darkBg bg-lightBg`}>
                            <TooltipComponent 
                                trigger={<BsArrowUpRight />} 
                                content={`Open ${project.title}`} 
                                className='text-4xl group-hover:rotate-45 group-hover:text-accent duration-300 transition-all' 
                            />
                        </a>
                        <h2 className='text-[42px] font-bold leading-none capitalize text-accent font-primary'>{project.category} Project</h2>
                        <p className='text-placeholder'>{project.description}</p>
                        <ul className='flex flex-row gap-4'>
                            {
                                project.stack.map((item, index) =>{
                                    return(
                                        <li key={index}>
                                            <TooltipComponent trigger={item.icon} content={item.name} className='text-4xl' />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='w-full lg:w-[50%]'>
                    <Swiper 
                        pagination={{
                        type: 'fraction',
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        className='lg:h-[520px]'
                        onSlideChange={handleSwiper}
                        modules={[Pagination, Navigation]}
                        navigation={true}
                        >
                        {
                            projects.map((project, index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className='h-[460px] relative group flex justify-center items-center '>
                                            <div></div>
                                            <div>
                                                <Image src={project.image} fill className='object-cover lg:object-contain' alt='project-image'/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })  
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio