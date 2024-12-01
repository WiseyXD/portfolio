'use client';
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as NextLink, Button as NextButton } from "@nextui-org/react";
import { GitHubIcon, LinkedInIcon } from './icons'
import { XIcon } from 'lucide-react'
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { div } from 'framer-motion/client';

const navItems = [
    {
        link: '/',
        text: 'Home'
    },
    {
        link: '/blogs',
        text: 'Blogs'
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

export const Header = (props: {}) => {
    const pathname = usePathname();
    return (

        <main className="bg-red-500 container relative mx-auto max-w-3xl my-8">
            <Navbar
                classNames={{
                    item: [
                        "flex",
                        "-px-2",
                        "relative",
                        "h-full",
                        "items-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[2px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-primary",
                    ]
                }}
            >

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {navItems.map((item) => {
                        return (
                            <NavbarItem key={item.link} isActive={pathname === item.link}>
                                <NextLink color="foreground" href={item.link}>
                                    {item.text}
                                </NextLink>
                            </NavbarItem>
                        )
                    })}
                </NavbarContent>

                <NavbarContent justify="end">
                    {navLinks.map((item) => {
                        return (
                            <Button
                                key={item.link}
                                className="size-10"
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
                </NavbarContent>

            </Navbar>
        </main>
    );
}
