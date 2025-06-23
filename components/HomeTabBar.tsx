import { productType } from '@/constants/data'
import Link from 'next/link'
import React from 'react'

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className='flex items-center justify-between flex-wrap gap-5'>
      <div className='flex items-center gap-3 text-sm font-semibold'>
        {productType?.map((item) => (
          <button
          onClick={() => onTabSelect(item?.title)} 
          key={item?.title}
          className={`border-tech_blue/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-tech_blue hover:border-tech_blue hover:text-white hoverEffect 
            ${selectedTab === item?.title ? "bg-tech_blue text-white border-tech_blue" : "text-tech_blue/20"}`}
          >
            {item?.title}</button>
        ))}
      </div>
      <Link href={"/shop"}
      className={`border-tech_blue/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-tech_blue hover:border-tech_blue hover:text-white hoverEffect`}
      >See All</Link>
    </div>
  )
}

export default HomeTabBar
