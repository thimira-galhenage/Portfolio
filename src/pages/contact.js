import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import TransitionEffect from '@/components/TransitionEffect'

const about = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Contact Information" />
      </Head>

      <TransitionEffect />

      {/* Keeps footer at the bottom */}
      <main className='flex w-full flex-col min-h-screen dark:text-light'>
        
        <div className='flex-grow'>
          <Layout className='pt-18 px-5'>
            
            <AnimatedText
              text="Contact me"
              className='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8'
            />

            {/* Centered contact details */}
            <div className='w-full flex justify-center'>
              <div className='text-center space-y-4 text-lg font-medium'>

                {/* Phone */}
                <p>
                  <strong>Mobile:</strong>{" "}
                  <a href="tel:+94765337424" className="underline">
                    +94 76 533 7424
                  </a>
                </p>

                {/* Email */}
                <p>
                  <strong>Email:</strong>{" "}
                  <a 
                    href="mailto:thimiragalhenage@gmail.com"
                    className="underline"
                  >
                    thimiragalhenage@gmail.com
                  </a>
                </p>

                {/* Address (opens in Google Maps) */}
                <p>
                  <strong>Address:</strong>{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Matugama"
                    target="_blank"
                    className="underline"
                  >
                    Dehigasmulla Road, Yattowita, Matugama
                  </a>
                </p>

                {/* LinkedIn */}
                <p>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/thimira-galhenage"
                    target="_blank"
                    className="underline"
                  >
                    Thimira Galhenage
                  </a>
                </p>

              </div>
            </div>

          </Layout>
        </div>

      </main>
    </>
  )
}

export default about
