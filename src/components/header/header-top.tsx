import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes';
import FullScreenToggle from './full-screen';
import ThemeButton from './theme-button';
import { Card } from '../ui/card';

const HeaderTop = () => {
    const { theme, setTheme } = useTheme();
    const headerData = [
        {
            label: 'Video qo’llanma',
            href: '/'
        },
        {
            label: 'Qoidalar',
            href: '/'
        },
        {
            label: 'Reklama beruvchilarga',
            href: '/'
        },
        {
            label: 'Sharhlar',
            href: '/'
        }, {
            label: 'Aloqa',
            href: '/'
        },
    ]

    return (
        <Card className='min-h-[44px] border border-slate-200 flex bg-transparent rounded-none items-center p-0 w-full'>
            <div className="container p-0 h-full">
                <nav className='flex justify-between h-full items-center gap-3 '>
                    <ul className='flex items-center gap-[20px]  '>
                        {
                            headerData?.map((item, index) => {
                                return (
                                    <li key={index} className='text-sm font-sans hover:text-blue-600'>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='flex items-center gap-2'>
                        <FullScreenToggle />
                        <ThemeButton />
                    </div>
                </nav>
            </div>
        </Card>
    )
}

export default HeaderTop