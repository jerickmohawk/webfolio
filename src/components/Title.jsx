'use client'
import {useState, useEffect} from "react";


function Title(){
    const titles =['International Student', 'Web Designer', 'Full Stack Developer' ];
    const [title, setTitle] = useState(titles[0]);

    
    useEffect(() =>{
        let index = 0 ;
        const interval = setInterval(() =>{
            setTitle(prevTitle => {
                index = (index + 1) % titles.length;
                return titles[index];
            });
        }, 1500)
        
        return() => clearInterval(interval);
    },[]); 
    return (
        <h3 className="h3 mb-4">And I am {title === 'International Student' ? 'an ' :  'a '}<span className="text-accent">{title}</span></h3>
                                
    );
}

export default Title