import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

function Header() {
  return (
    <header className='bg-white py-5 border-b border-b-black/50'>
      <Container className='flex items-center justify-between py-4'>
        {/*Logo*/}
        <Logo />
        {/*Nav Button*/}
        <HeaderMenu />
        <div>Others</div>

        {/*Nav Admin*/}

      </Container>
    </header>
  )
}

export default Header
