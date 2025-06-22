import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'

function Footer() {
  return (
    <footer className='bg-white border-t'>
        <Container>
          <FooterTop />
          <div>
            <div>
              <Logo />
              <p>
                We are dedicated to providing you with the best online shopping experience. 
                Our team works tirelessly to ensure that you have access to a wide range of high-quality products at competitive prices.
                Thank you for choosing us for your shopping needs! 
              </p>
              <SocialMedia className='text-darkColor/60'
                iconClassName='border-darkColor/60 hover:text-primary hover:border-primary transition-colors'
                tooltipClassName='bg-darkColor text-white' 

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
