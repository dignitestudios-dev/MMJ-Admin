import React from 'react'
import LOGO from '../../assets/MMJ_LOGO.svg';
import { RxDashboard } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';

type SidebarItemType = {
    title: string;
    activeURL: string;
    linkTo: string;
    Icon: React.ElementType;
}

const SIDEBAR_LIST: SidebarItemType[] = [
    {
        title: "Dashboard",
        linkTo: `/dashboard`,
        activeURL: '/dashboard',
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

const AppSidebar = () => {
    const { pathname } = useLocation();
    return (
        <aside className='w-96 border-r h-full p-5 max-sm:hidden'>
            <figure>
                <img src={LOGO} alt="app logo" />
            </figure>
            <ul className='space-y-3 py-16'>
                {SIDEBAR_LIST.map(({ Icon, linkTo, activeURL, title }, navIndex) => (
                    <NavLink
                        key={navIndex}
                        to={linkTo}
                        className={`${pathname === activeURL ? 'bg-primaryGreen text-primaryBlack text-center shadow font-primary' : 'bg-transparent hover:bg-gray-100'} flex items-center gap-2 py-2 px-5 rounded-md`}
                    >
                        <Icon size={20} />
                        {title}
                    </NavLink>

                ))}
            </ul>
        </aside>
    )
}

export default AppSidebar