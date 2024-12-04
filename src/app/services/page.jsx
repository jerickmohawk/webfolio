'use client'
import Link from "next/link"
import { FaMagnifyingGlass, FaCode, FaMobileScreenButton, FaPhone } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";



const services = [
    {
        icon: <FaCode />,
        title: 'Website Development',
        desicription: 'I create custom, responsive websites that are user-friendly and visually appealing, ensuring optimal performance and a seamless online experience.'
    },
    {
        icon: <FaMobileScreenButton />,
        title: 'Mobile Development',
        desicription: 'I develop innovative and intuitive mobile apps for iOS and Android, focusing on exceptional user experiences and the latest technologies.'
    },
    {
        icon: <SiAdobephotoshop />,
        title: 'Graphic Design',
        desicription: 'I provide graphic design services including brochures, logos, and cards, creating impactful designs that communicate your brand message effectively.'
    },
    {
        icon: <FaMagnifyingGlass />,
        title: 'SEO',
        desicription: 'I boost your online visibility and drive organic traffic with proven SEO strategies, including keyword research, optimization, and content creation.'
    },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12">
        <div className=" container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {
                services.map((item,index) =>{
                    return (
                        <motion.div 
                            initial={{opacity: 0, y:50}}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: index+.4,
                                    duration: 0.4,
                                    ease: 'easeIn'
                                }
                            }}
                            className={`flex flex-col flex-1 justify-center rounded-md gap-6 group px-6 py-10 border-b-2 border-b-accent dark:bg-darkBg bg-lightBg`} key={index}>
                            
                            <div className="w-full flex items-center gap-4">
                                <div className="text-4xl group-hover:text-accent transition-colors duration-300">{item.icon}</div>
                                <h2 className="font-primary text-[20px] md:text-[24px] font-bold leading-none 
                                                group-hover:text-accent transition-all duration-300">
                                    {item.title}
                                </h2>
                            </div>
                            <p className="opacity-50">{item.desicription}</p>
                            <Button variant='download' size='lg' className='uppercase flex items-center gap-2 font-primary h-10 w-42 mx-auto group-hover:border-accent'>
                                <span>Contact me</span>
                                <FaPhone className="text-xl" />
                            </Button>
                        </motion.div>
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}

export default Services