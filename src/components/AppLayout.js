import React, { useState } from 'react'
import Header from './header/Header'
import SideBar from './sideBar/SideBar'
import AppRoutes from './routes/AppRoutes';

function AppLayout() {
    const [isSideBarExpand, setIsSideBarExpand] = useState(true);

    return (
        <div>
            <main className=' w-screen h-screen overflow-hidden'>
                <div className=' w-full !z-50'>
                    <Header setIsSideBarExpand={setIsSideBarExpand} isSideBarExpand={isSideBarExpand} />
                </div>
                <div className=' w-full flex'>
                    <div className=''>
                        <SideBar isSideBarExpand={isSideBarExpand} />
                    </div>
                    <div className=' h-screen w-full dark:bg-[#282828] pb-20 dark:text-[#606060] overflow-auto'>
                        <AppRoutes />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AppLayout