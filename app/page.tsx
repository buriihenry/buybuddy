import Container from '@/components/Container';
import React from 'react';

const Home = () => {
  return (
    <Container className='bg-tech_purple'>
      <h1 className='text-xl font-semibold'>Home</h1>
      <p>
        Hi there! This is the home page of your Next.js application. It is rendered on the server side, 
        which means it can be optimized for performance and SEO. 
        You can add more content here or create additional components to enhance your application.


      </p>
    </Container>
  )
}

export default Home;