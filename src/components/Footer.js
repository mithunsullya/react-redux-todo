import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full bg-black py-4 text-center text-white'>
        <div>Copyrights @mithunsullya </div>
        <div className=''> Built in <span className='text-red-500 text-[1.25rem]'>&#9829;</span> with React and deployed on Netlify </div>
    </footer>
  )
}

export default Footer