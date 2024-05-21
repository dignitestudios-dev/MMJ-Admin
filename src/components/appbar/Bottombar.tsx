import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';

type BottombarType = {
    title: string;
    activeURL: string;
    linkTo: string;
    Icon: React.ElementType;
}

const BOTTOMBAR_LIST: BottombarType[] = [
    {
        title: "Dashboard",
        linkTo: `/`,
        activeURL: '/',
        Icon: RxDashboard
    },
    {
        title: "Users",
        linkTo: "/users",
        activeURL: "/users",
        Icon: IoPersonOutline
    },
    {
        title: "Notifications",
        linkTo: "/notifications",
        activeURL: "/notifications",
        Icon: IoNotificationsOutline
    },
]

const Bottombar = () => {
    const { pathname } = useLocation();
    return (
        <nav className='absolute bottom-0 bg-white sm:hidden w-full'>
            <ul className='grid grid-cols-3'>
                {BOTTOMBAR_LIST.map(({ Icon, linkTo, activeURL, title }, navIndex) => (
                    <NavLink
                        key={navIndex}
                        to={linkTo}
                        className={`${pathname === activeURL ?
                            'bg-primaryGreen text-primaryBlack text-center shadow font-primary'
                            :
                            'bg-transparent hover:bg-gray-100'} flex flex-col items-center gap-2 py-3 px-5`
                        }
                    >
                        <Icon size={20} />
                        {title}
                    </NavLink>

                ))}
            </ul>
        </nav>
    )
}

export default Bottombar