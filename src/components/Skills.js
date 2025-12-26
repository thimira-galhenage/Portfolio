import React from 'react'
import {motion} from 'framer-motion'
import AnimatedText from './AnimatedText'

const Skill = ({name,x,y})=>{
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark
         text-light p-8 shadow-dark dark:text-dark dark:bg-light
        py-3 px-6 cursor-pointer absolute
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x, y:y , transition:{duration:1.5}}
        }>
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <AnimatedText className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32' text="Skills"></AnimatedText>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark 
            dark:text-dark dark:bg-light text-light p-4 shadow-dark
            lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale:1.05}}>
                SolidWorks
            </motion.div>
            <Skill name="MATLAB" x="-25vw" y="2vw"/>
            <Skill name="Inventor" x="-5vw" y="-10vw"/>
            <Skill name="AutoCAD" x="17vw" y="5vw"/>
            <Skill name="Ansys" x="0vw" y="12vw"/>
            <Skill name="PLC" x="-20vw" y="-8vw"/>
            <Skill name="ROS" x="12vw" y="-11vw"/>
            <Skill name="Condition-Based Monitoring" x="32vw" y="-5vw"/>
            <Skill name="NDT" x="0vw" y="-20vw"/>
            <Skill name="Lean" x="-5vw" y="20vw"/>
            <Skill name="Six Sigma" x="-40vw" y="-2vw"/>
            <Skill name="5S" x="-12vw" y="7vw"/>
            <Skill name="Kaizen" x="16vw" y="17vw"/>
            <Skill name="MS Office" x="-35vw" y="-15vw"/>
            <Skill name="Smartsheet" x="-22vw" y="16vw"/>
            <Skill name="Critical thinking" x="25vw" y="-15vw"/>
            <Skill name="Communication" x="-33vw" y="10vw"/>
            <Skill name="Teamwork" x="32vw" y="10vw"/>
            <Skill name="Time Management" x="-18vw" y="-17vw"/>
        </div>
    </>
  )
}

export default Skills