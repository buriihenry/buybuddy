"use client";
import React from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import useStore from '@/store'

const CartIcon = () => {
  const {items} = useStore()
  return (
    <Link href={"/cart"} className='group relative'>
        <ShoppingBag className='w-5 h-5 hover:text-tech_light_blue hoverEffect' />
        <span className='absolute -top-1 -right-1 bg-tech_blue text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'>
        {items?.length? items?.length : 0}
        </span>
      
    </Link>
  )
}

export default CartIcon
