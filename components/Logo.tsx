import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

const Logo = ({className}: {className?:string}) => {
  return (
    <Link href={"/"}>
        <h2 className={cn("text-2xl text-tech_dark_green font-black tracking-wide uppercase hover:text-tech_light_green hoverEffect group font-sans",className)}>
            Buybudd<span className='text-tech_light_green group-hover:text-tech_dark_green hoverEffect'>y</span>
        </h2>
    </Link>
  )
}

export default Logo
