import NoAccess from '@/components/NoAccess';
import WishListProducts from '@/components/WishListProducts';
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const WishListPage = async () => {
    const user = await currentUser();
  return (
    <>
      {user ? (<WishListProducts />) : (<NoAccess details="Log in to view your wishlist items. 
      If you don't have an account, you can create one easily." 
      />)}
    </>
  )
}

export default WishListPage
