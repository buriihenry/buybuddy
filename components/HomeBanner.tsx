import React from 'react'
import { Title } from './ui/text'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '@/images'

const HomeBanner = () => {
  return (
    <div className='py-16 md:py-0 bg-home_page rounded-lg px-10 lg:px-24 flex items-center justify-between'
    >
     <div className='space-y-5'>
        <Title>
            Welcome to Tech Store! Your one-stop shop for all things tech.
        </Title>
        <Link
        href={"/shop"}
        className='bg-tech_light_blue/90 text-tech_dark px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-tech_light_blue_2 hoverEffect'
        >
            Shop Now
        </Link>
     </div> 
     <div>
        <Image
            src={banner_1}
            alt="banner1"
            className='hidden md:inline-flex w-96' 
        />

     </div>
    </div>
  )
}

export default HomeBanner
