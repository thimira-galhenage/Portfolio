import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import AnimatedText from './AnimatedText';

const Details = ({type,time,place,info})=>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
                <br/>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time}{" "}|{" "}{place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>

            </h3>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","center start"]
    })

  return (
    <div className='my-64 '>
        <AnimatedText text="Certifications" className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'> 
            
        </AnimatedText>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY:scrollYProgress}}
            className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                type="Lean Six Sigma Yellow Belt" 
                time="2024"
                place="The Lean Six Sigma Company"
                info="Focuses on the fundamentals of process improvement and operational efficiency. It certifies your ability to 
                participate in DMAIC (Define, Measure, Analyze, Improve, Control) projects, helping organizations reduce waste and 
                improve quality using data-driven methods."/> 

                <Details 
                type="Java Application Development using JavaSE" 
                time="2021"
                place="Computing Services Centre, University of Colombo School of Computing"
                info="A technical certification covering Object-Oriented Programming (OOP) using Java Standard Edition (JavaSE). 
                This demonstrates proficiency in building robust applications, managing data structures, and understanding the 
                core syntax of the Java language."/>  

                <Details 
                type="Diploma in Information Technology" 
                time="2020"
                place="ESOFT Metro College Kalutara"
                info="A comprehensive foundation in Information Technology that carries international quality assurance. It typically 
                covers a broad range of IT essentials, including software development, networking, and systems analysis, proving a 
                well-rounded technical literacy."/>

                <Details 
                type="Graphic Design" 
                time="2017"
                place="Infobit Lanka Computer School"
                info="An aesthetic and technical certification focusing on visual communication. Achieving a Distinction Pass indicates 
                high proficiency in design software (like Photoshop or Illustrator) and a strong grasp of layout, typography, and color theory."/>

            </ul>
        </div>

    </div>
  )
}

export default Education