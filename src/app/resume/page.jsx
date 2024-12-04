'use client'
import { FaBlackTie, FaCertificate, FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql, SiSupabase, SiFirebase, SiNextdotjs, SiDjango, SiExpress, SiTailwindcss, SiAdobephotoshop, SiNodedotjs, SiCanva, SiFigma  } from "react-icons/si";
import { useState } from "react";
import {motion} from 'framer-motion'
import { useContext } from "react";
import { ThemeContext } from "@/provider/ThemeProvider";

// about me data
const about = {
  title: "About me",
  description: 'As an independent professional, I specialize in building custom websites and mobile applications, providing high-quality graphic design, and enhancing online visibility through effective SEO strategies. I’m dedicated to delivering tailored solutions that meet client needs with precision and creativity.',
  data:[
    {
      name: 'Name',
      value: 'Jerick Cabarloc'
    },
    {
      name: 'Experience',
      value: '1+ Year'
    },
    {
      name: 'LinkedIn',
      value: 'jerick.cabarloc7'
    },
    {
      name: 'Nationality',
      value: 'Filipino'
    },
    {
      name: 'Freelance',
      value: 'Available'
    },
    {
      name: 'Email',
      value: 'jerick.cabarloc43@gmail.com'
    },
    
  ]
}
// experience
const experience = {
  icon: <FaBlackTie />,
  title: 'My Experience',
  description: 'I specialize in website and mobile development, graphic design, and SEO. Despite my short experience, I continually enhance my skills through self-study, ensuring high-quality service.',
  data: [
    {
      company: 'Cloudstaff Inc.',
      location: 'Angeles City, Philippines',
      position: 'Associate Software Engineer',
      duration: '2015 - 2016'
    },
    {
      company: 'Freelance Designer.',
      location: 'Hamilton, Ontario',
      position: 'Graphic Designer',
      duration: '2022 - Present'
    },
    {
      company: 'E-commerce Startup',
      location: 'Toronto, Ontario',
      position: 'Full Stack Developer',
      duration: '2024 - Present'
    }
  ],

}
// education
const education = {
  icon: <FaCertificate />,
  title: 'My Education',
  description: 'I have a strong foundation in Computer Science and am currently expanding my expertise through studies in Software Support, along with taking various online courses to improve my development skills.',
  data:[
    {
      institution: 'Holy Angel Univeristy',
      location: 'Angeles City Philippines',
      degree: 'Bachelor Of Science in Computer Science',
      duration: '2012 - 2016',
    },
    {
      institution: 'Mohawk College',
      location: 'Hamilton, Ontario',
      degree: 'Computer Systems Technician - Software Support',
      duration: '2022 - 2024',
    },
    {
      institution: 'Udemy',
      location: 'Hamilton, Ontario',
      degree: '100 Days of Code: Python Programming',
      duration: '2023',
    },
    {
      institution: 'Udemy',
      location: 'Hamilton, Ontario',
      degree: 'The Complete 2024 Web Development Bootcamp',
      duration: '2024',
    },
  ]
}
// skills
const skills = {
  title: 'My Skills',
  description: 'I have strong programming skills and a solid foundation in Computer Science, complemented by expertise in graphic design. I continuously enhance my skills through ongoing training and online courses.',
  language:[
    {
      icon: <FaJava />,
      name: 'java'
    },
    {
      icon: <FaPython />,
      name: 'python'
    },
    {
      icon: <SiJavascript />,
      name: 'javaScript'
    },
    {
      icon: <FaHtml5 />,
      name: 'html'
    },
    {
      icon: <FaCss3Alt />,
      name: 'css'
    },
    {
      icon: <SiNodedotjs />,
      name: 'node.js'
    },
  ],
  framework: [
    {
      icon: <FaReact />,
      name: 'react'
    },
    {
      icon: <FaReact />,
      name: 'react native'
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwindcss'
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js'
    },
    {
      icon: <SiExpress />,
      name: 'express.js'
    },
    {
      icon: <SiDjango />,
      name: 'django'
    },
  ],
  database:[
    {
      icon: <SiMongodb />,
      name: 'mongoDB'
    },
    {
      icon: <SiMysql />,
      name: 'mySQL'
    },
    {
      icon: <SiSupabase />,
      name: 'supabase'
    },
    {
      icon: <SiFirebase />,
      name: 'firebase'
    },
  ],
  design:[
    {
      icon: <SiAdobephotoshop />,
      name: 'photoshop'
    },
    {
      icon: <SiCanva />,
      name: 'canva'
    },
    {
      icon: <SiFigma />,
      name: 'figma'
    }
  ]
}
// tabs
const tabs = ['Experience', 'Education', 'Skills' , 'About me']

// skillstab
const skillsTab = ['Language' , 'Framework', 'Database', "Design"]

// experience components
const Experience = () =>{
  return(
    <div className="w-full h-full">
      <div className="flex flex-col gap-8 text-center lg:text-left">
        <h3 className="text-4xl font-bold font-primary">{experience.title}</h3>
        <p className="max-w-[600px] mx-auto lg:mx-0 text-placeholder">{experience.description}</p>
        <div className="h-full">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {experience.data.map((item,index)=>{
                return(
                  <li key={index} className={`dark:bg-darkBg bg-lightBg rounded-md py-6 px-10 h-[220px] flex flex-col justify-center items-center lg:items-start gap-1`}>
                    <p className="text-accent font-primary">{item.duration}</p>
                    <p className="font-primary text-lg">{item.position}</p>
                    <div className="flex flex-col leading-normal  text-gray-400">
                      <span>{item.company}</span>
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
        </div>
      </div>
    </div>
  )
}
const Education = () =>{
  return(
    <div className="w-full h-full">
      <div className="flex flex-col gap-8 text-center lg:text-left">
        <h3 className="text-4xl font-bold font-primary">{education.title}</h3>
        <p className="max-w-[600px] mx-auto lg:mx-0 text-placeholder">{education.description}</p>
        <div className="h-full">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.data.map((item,index)=>{
                return(
                  <li key={index} className={`dark:bg-darkBg bg-lightBg rounded-md py-6 px-10 h-[220px] flex flex-col justify-center items-center lg:items-start gap-1`}>
                    <p className="text-accent font-primary">{item.duration}</p>
                    <p className="font-primary text-lg">{item.degree}</p>
                    <div className="flex flex-col leading-normal  text-gray-400">
                      <span>{item.institution}</span>
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
        </div>
      </div>
    </div>
  )
}
// SKills Card
const SkillsCard = ({data}) =>{
  const {theme} = useContext(ThemeContext)
  return(
    <ul className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-8 lg:bg-transparent rounded-md ${theme === 'dark' ? 'bg-darkBg' : 'bg-lightBg'}`}>
      {
        data.map((item, index)=>{
          return(
            <li key={index} 
                        className={`py-6 lg:dark:bg-darkBg lg:bg-lightBg rounded-md`}>
              <div className="flex flex-col text-4xl gap-2  w-full h-full justify-center items-center">
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}
const Skills = () =>{
  const [skill, setSkill] = useState('Language')
  return(
    <div className="w-full h-full">
      <div className="flex flex-col gap-8 text-center lg:text-left">
        <div>
          <h3 className="text-4xl font-bold font-primary">{skills.title}</h3>
          <p className="max-w-[600px] mx-auto lg:mx-0 text-placeholder">{skills.description}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {skillsTab.map((item, index)=>{
            return(
              <div 
                  key={index}
                  onClick={()=>setSkill(item)}
                  className={`${skill === item ? 'bg-accent font-semibold' : ''} 
                            cursor-pointer w-full flex items-center justify-center font-primary py-1 lg:py-2 border`}>
                <p className="text-sm">{item}</p>
              </div>
            )
          })}
        </div>
        {skill === 'Language' && <SkillsCard data={skills.language} />}  
        {skill === 'Framework' && <SkillsCard data={skills.framework} />}  
        {skill === 'Database' && <SkillsCard data={skills.database} />}  
        {skill === 'Design' && <SkillsCard data={skills.design} />}  
      </div>
    </div>
  )
}

// About me
const About = () =>{
  return(
    <div className="w-full text-center lg:text-left">
      <div className="flex flex-col gap-8">
        <h3 className="text-4xl font-primary font-bold">{about.title}</h3>
        <p className="max-w-[600px] mx-auto lg:mx-0 text-placeholder">{about.description}</p>   
        <ul className="max-w-[620px] grid grid-cols-1 lg:grid-cols-2 gap-y-6 mx-auto lg:mx-0">
          {
            about.data.map((item, index)=>{
              return(
                <li key={index} className="flex items-center justify-center lg:justify-start gap-4">
                  <span className="text-placeholder">{item.name}</span>
                  <span className="text-xl font-primary justify-self-end">{item.value}</span>
                </li>
              )
            })
          }
        </ul>     
      </div>
    </div>
  )
}

const Resume = () => {
  const [tab, setTab] = useState('Experience')
  return (
    <div className="min-h-[80vh] flex justify-center mt-0 lg:mt-10 py-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 ">
          <div className="flex flex-col items-center h-full w-full max-w-[380px] mx-auto lg:mx-0 gap-4">
            {
              tabs.map((item, index) =>{
                return(
                  <div key={index} className={`cursor-pointer inline-flex h-auto p-1 font-primary
                                  w-full justify-center whitespace-nowrap border font-medium ring-offset-white transition-all
                                  ${tab === item && 'bg-accent font-semibold dark:text-black text-white'}
                                  `} 
                      onClick={()=>setTab(item)}>
                    {item}
                  </div> 
                )
              })
            }
          </div>
          <motion.div 
            key={tab}
            initial={{y:50, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{ease:'easeIn', duration: .75}}
            className="min-h-[70vh] w-full"
            >
              {tab === 'Experience' && <Experience />}
              {tab === 'Education' && <Education />}
              {tab === 'Skills' && <Skills />}
              {tab.includes('About') && <About />}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Resume