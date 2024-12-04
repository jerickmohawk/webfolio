import React from 'react'
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import Link from 'next/link'
import TooltipComponent from './Tooltip'

const socials = [
    {icon: <FaGithub className='text-xl' />, path: 'https://github.com/jerickmohawk', title:'Github'},
    {icon: <FaFacebook className='text-xl' />, path: '', title:'Facebook'},
    {icon: <FaLinkedin className='text-xl' />, path: 'https://www.linkedin.com/in/jerick-cabarloc-49130b165/', title:'LinkedIn'},

]

const Social = () => {
  return (
    <div className='flex gap-4'>
        {
            socials.map((item, index) =>{
                return(
                    <a key={index} target='_blank' href={item.path} className='dark:bg-darkBg bg-lightBg rounded-sm w-10 h-10 flex justify-center items-center hover:text-accent transition-colors duration-300'>
                        <TooltipComponent trigger={item.icon} content={item.title} />
                    </a>
                )
            })
        }
    </div>
  )
}

export default Social