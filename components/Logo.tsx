import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

const Logo = ({className, spanDesign}: {
  className?:string, 
  spanDesign?:string
}) => {
  return (
    <Link href={"/"} className='inline-flex'>
        <h2 className={cn("text-2xl text-tech_blue font-black tracking-wide uppercase hover:text-tech_light_blue_2 hoverEffect group font-sans",className)}>
            Buybudd<span className={cn('text-tech_light_blue group-hover:text-tech_blue hoverEffect', spanDesign)}>y</span>
        </h2>
    </Link>
  )
}

export default Logo
