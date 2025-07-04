import React from 'react'
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

import { cn } from '@/lib/utils';
import Link from 'next/link';


interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "#",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "#",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "",
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({className,iconClassName,tooltipClassName}:Props) => {
  return (
    <TooltipProvider>
        <div className={cn("flex items-center gap-3.5", className)}>
            {socialLink.map((item) => (
                <Tooltip key={item?.title}>
                    <TooltipTrigger asChild>
                        <Link href={item?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("p-2 border rounded-full hover:text-white hover:bg-tech_light_yellow hoverEffect", 
                            iconClassName)}
                        >
                        {item?.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn(" bg-white text-tech_dark font-semibold", tooltipClassName)}>
                        {item?.title}
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia
