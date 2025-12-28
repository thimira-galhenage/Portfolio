// src/pages/projects/[slug].js

import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Head from 'next/head';
import projectsData from '@/data/projectsData';

const ProjectDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the project by slug
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return <p>Loading...</p>;

  return (
    <Layout>
      <Head>
        <title>{project.title}</title>
      </Head>

      <div className='max-w-5xl mx-auto p-4 dark:text-light'>
        {/* Project Title */}
        <h1 className='text-4xl font-bold mb-4'>{project.title}</h1>

        {/* Project Summary */}
        <p className='mb-6'>{project.summary}</p>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <div className='mb-6 space-y-6'>
            {project.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${project.title} image ${index + 1}`}
                width={800}    // required
                height={500}   // required
                className='rounded-lg'
              />
            ))}
          </div>
        )}

        {/* Project Videos */}
        {project.videos && project.videos.length > 0 && (
          <div className='mb-6 space-y-6'>
            {project.videos.map((video, index) => (
              <video key={index} controls className='w-full rounded-lg'>
                <source src={video} type='video/mp4' />
              </video>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectDetails;
