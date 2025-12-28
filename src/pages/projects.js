// src/pages/projects.js

import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import projectsData from '@/data/projectsData';
import Image from 'next/image';

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, shortSummary, img, slug }) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
     rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <Link href={`/projects/${slug}`} className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
            <FramerImage 
              src={img} 
              alt={title} 
              width={800} 
              height={500} 
              className='w-full h-auto' 
              priority 
              sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw' 
            />
        </Link>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
         bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 '>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
            <motion.h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm' whileHover={{scale:1.05}}
            transition={{duration:0.2}}>{title}</motion.h2>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
                {shortSummary}
            </p>
            <div className='mt-2 flex items-center'>
                <Link href={`/projects/${slug}`} className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                    <span>View Project</span>
                </Link>
            </div>
        </div>
    </article>
  )
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="Portfolio Projects" />
      </Head>
      <TransitionEffect/>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16 px-20 sm:px-0'>
          <AnimatedText text="Project Showcase" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
          <div className='grid grid-cols-12 gap-24 px-10 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            {projectsData.map((project, index) => (
              <div className='col-span-12' key={index}>
                <FeaturedProjects 
                  title={project.title}
                  shortSummary={project.shortSummary}
                  img={project.images[0]}
                  slug={project.slug}
                  type={project.type}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  )
};

export default Projects;
