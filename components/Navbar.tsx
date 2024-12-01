'use client';
import React from 'react'
import { GitHubIcon, LinkedInIcon } from './icons'
import { XIcon } from 'lucide-react'
import { Button } from './ui/button';

const navItems = [
    {
        link: '/blogs',
        text: 'Blogs'
    },
    {
        link: '/home',
        text: 'Home'
    },
    {
        link: '/projects',
        text: 'Projects'
    }]

const navLinks = [
    {

        link: '/g',
        icon: GitHubIcon
    },
    {
        link: '/l',
        icon: LinkedInIcon
    },
    {
        link: '/x',
        icon: XIcon
    },
]

export const Navbar = (props: {}) => {
    return (
        <main className='flex flex-row justify-between items-center gap-x-3'>
            <div className='flex gap-x-3'>
                {navItems.map(item => {
                    return (
                        <div key={item.link} > {item.text}</div>
                    )
                })}
            </div>

            <div className='flex gap-x-3'>
                {navLinks.map(item => {
                    return (
                        <Button
                            key={item.link}
                            className="size-8"
                            variant="outline"
                            size="icon"
                            asChild
                        >
                            <a href={item.link}>
                                <item.icon className="size-4" />
                            </a>
                        </Button>
                    )
                })}
            </div >
        </main >
    )
}
