import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-orange-400 via-blue-500 to-rose-500'>
        <div className='container mx-auto text-center'>
            <p className='text-lg font-bold transition-colors hover:text-orange-700'>&copy; 2024 Shagufta Zakir. All right reserve</p>
            <div className='mt-4'>
                <a href='muhammadumarumar128512@gmail.com'
                 className='text-white hover:text-orange-700 hover:underline '>
                    Contact me via Email
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer