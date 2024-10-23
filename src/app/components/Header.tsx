import React from 'react'

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-pink-500 via-blue-500 to-orange-400 h-[100px] p-7 fixed top-0 w-full z-50'>
        <nav className='container mx-auto flex justify-between items-center '>
        <h1 className='text-3xl font-bold cursor-pointer'>Shagufta</h1>
        <ul className='flex space-x-7 cursor-pointer'>
          <li><a href='#' className='transition-colors hover:text-red-700 hover:scale-50 hover:underline'>Home</a></li>
            <li><a href='#about'
            className='transition-colors hover:text-red-700 hover:scale-50 hover:underline'
            >About Me</a></li>
            <li><a href='#Portfolio'
            className='transition-colors hover:text-red-700 hover:scale-50 hover:underline'
            >Portfolio</a></li>
            <li><a href='#contact'
            className='transition-colors hover:text-red-700 hover:scale-50 hover:underline'
            >contact</a></li>
        </ul>
        </nav>
    </header>
  )
}

export default Header