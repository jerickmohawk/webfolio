'use client'

import Hero from "@/components/Hero"
import Social from "@/components/Social"
import Title from "@/components/Title"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import {saveAs} from "file-saver";

function Homepage() {
  const handleDownload = () => {
      const fileUrl = '/assets/files/resume.pdf';
      saveAs(fileUrl, 'resume.pdf');
    };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* information */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <h3 className="h3">Hello I&apos;am</h3>
            <h1 className="h1">Jerick Cabarloc</h1>
            <Title />
            <p className="max-w-[500px] mb-9 font-secondary">
              I am passionate in creating seamless digital experiences and  
              proficient in various programming languages and technologies. 
              Explore my work and consider hiring me for a fresh perspective on your team.
            </p>
            {/* download btn and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button onClick={handleDownload} variant='download' size='lg' className='uppercase flex items-center font-primary gap-2'>
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Hero />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage