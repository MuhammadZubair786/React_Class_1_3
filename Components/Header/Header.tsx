import  React from 'react'
import Image from 'next/image'
import logo from '../../public/images.png'


function Header(){
    return(
        <div className='bg-red-400'>

        <div className='bg-red-400 text-white text-3xl flex justify-between mx-4'>
            <Image 
            className='w-10 h-10 m-3'
            src={logo}
            alt=''
            />
            <div className='flex m-3 justify-around  space-x-5'>
                <b>Home</b>
                <b>About</b>
                <b>SERVICES</b>
                <b>CONTACT</b>
                <b>BLOG</b>

            </div>
        </div>
        </div>

    )
}

export default Header