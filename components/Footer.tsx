import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { SubText, SubTitle } from './ui/text'
import { categoriesData, quickLinksData } from '@/constants/data'
import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'

function Footer() {
  return (
    <footer className='bg-white border-t'>
        <Container>
          <FooterTop />
          <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='space-y-4'>
              <Logo />
              <SubText className='text-gray-600 text-sm'>
                We are dedicated to providing you with the best online shopping experience. 
                Thank you for choosing us for your shopping needs! 
              </SubText>
             <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-tech_blue hover:text-tech_blue"
              
              />
            </div>
            <div>
              <SubTitle> Quick Links</SubTitle>
              <ul className='space-y-3 mt-4'>
                {quickLinksData?.map((item)=>(
                  <li key={item?.title}>
                    <Link href={item?.href}
                      className='hover:text-tech_blue hoverEffect font-medium'
                    >
                    {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SubTitle>Categories</SubTitle>
              <ul className='space-y-3 mt-4'>
                {categoriesData?.map((item)=>(
                  <li key={item?.title}>
                    <Link 
                    href={`/category/${item?.href}`}
                    className='hover:text-tech_blue hoverEffect font-medium'
                    >
                    {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className='space-y-4'>
              <SubTitle>Newsletter</SubTitle>
              <SubText>
                Subscribe to our newsletter to get the latest updates and offers.
              </SubText>
              <form className='space-y-3'>
                <Input placeholder='Enter your email address' type="email" className='mt-4' required />
                <Button className='w-full'>Subscribe</Button>
              </form>
              
            </div>
          </div>
                <div className="py-6 border-t text-center text-sm text-gray-600 items-center flex flex-col gap-2">
                <div>
                  © {new Date().getFullYear()} <Logo className="text-sm" />. All
                  rights reserved.
                </div>
              </div>
          
        </Container>
      
    </footer>
  )
}

export default Footer
