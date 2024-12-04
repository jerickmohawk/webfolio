'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-full relative bg-transparent'>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: .7, duration: .2, ease: 'easeIn'}}}
        >
            <div className='w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] '>
                <Image 
                    src='/assets/images/home-image2.png' 
                    priority
                    quality={100}
                    fill
                    alt=''
                    className='object-contain'    
                />
            </div>
        </motion.div> 
    </div>
  )
}

export default Hero