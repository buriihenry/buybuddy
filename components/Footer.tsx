import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { SubText } from './ui/text'

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
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Container>
      
    </footer>
  )
}

export default Footer
