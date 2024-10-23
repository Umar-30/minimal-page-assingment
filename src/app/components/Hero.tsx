import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gradient-to-r from-teal-500 to-purple-500 py-16  flex items-center justify-center min-h-screen pt-20'>
        <div className='bg-orange-300 rounded-lg shadow-lgp-8 max-w-2xl text-center transform translate-x-11 '>
            <h2 className='text-3xl font-bold text-gray-900 animate-fadeIn mb-4'>
                Welcome to My Web Page. 
            </h2> 
            <p className='mt-4 text-gray-900 animate-fadeIn delay-500 font-bold mb-3'>
               This is a simple website built using Next.js<br /> and Tailwind CSS.
               <br />lt's a simple and modren website templete
                feel free to explore the source code on <b>Github.</b><br />
                This website serve as my personal <b>Portfolio </b> where I showcase  
                <br />my web development project and <b>skills.</b><br />
                 This website is desinged to be fast,<br /> responsive 
                 and user-friendly.          </p>
        </div>
    </section>
  )
}

export default Hero