import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import CustomIcon from '../icons/DashboardIcon';
import DashboardIcon from '../icons/DashboardIcon';
import ContentIcon from '../icons/ContentIcon';
import AnalyticeIcon from '../icons/AnalyticsIcon';
import CommentsIcon from '../icons/CommentsIcon';
import CopyRightIcon from '../icons/CopyRightIcon';
import SubtitleIcon from '../icons/SubtitleIcon';
import EarnIcon from '../icons/EarnIcon';
import CustomizationIcon from '../icons/CustomizationIcon';
import AudioLibraryIcon from '../icons/AudioLibraryIcon';



function SideBar({ isSideBarExpand }) {

    const location = useLocation();
    const NavItems = [
        {
            icon:
                <DashboardIcon
                    isActive={location.pathname === '/dashboard'}
                />,
            to: "/dashboard",
            item: "Dashboard",
        },
        {
            icon:
                <ContentIcon
                    isActive={location.pathname === '/content'}
                />
            ,
            to: "/content",
            item: "Content"
        },
        {
            icon:
                <AnalyticeIcon
                    isActive={location.pathname === '/analytics'}
                />
            ,
            to: "/analytics",
            item: "Analytics"
        },
        {
            icon:
                <CommentsIcon
                    isActive={location.pathname === '/comments'}
                />
            ,
            to: "/comments",
            item: "Comments"
        },
        {
            icon:
                <SubtitleIcon
                    isActive={location.pathname === '/subtitle'}
                />
            , to: "/subtitle",
            item: "Subtitle"
        },
        {

            icon:
                <CopyRightIcon
                    isActive={location.pathname === '/copyright'}
                />
            ,
            to: '/copyright',
            item: "Copyright"

        },


        {
            icon:
                <EarnIcon
                    isActive={location.pathname === '/earn'}
                />
            ,
            to: '/earn',
            item: "Earn"
        },
        {
            icon:
                <CustomizationIcon
                    isActive={location.pathname === '/customization'}
                />
            ,
            to: '/customization',
            item: "Customization"
        },
        {
            icon:
                <AudioLibraryIcon
                    isActive={location.pathname === '/audio-library'}
                />
            ,
            to: '/audio-library',
            item: "Audio Library"
        },
    ]
    return (

        <div className={`border-r dark:border-r-[rgba(255,255,255,0.1)] dark:border-r-[#a0a0a0] dark:bg-[#282828] dark:text-[#aaa] relative h-[calc(100vh_-_65px)] flex flex-col items-stretch  transition-all ${isSideBarExpand ? "w-[256px]" : "w-[80px]"}`}>
            {/* Top Section */}
            <div className={`flex flex-col items-center justify-center transition-all ${isSideBarExpand ? 'h-[208px]' : 'px-[20px] h-[60px]'}`} >
                <div className={`${isSideBarExpand ? 'w-[112px] h-[112px] ' : 'w-[30px] h-[30px]'}  bg-slate-300 rounded-full`}>
                </div>
                {
                    isSideBarExpand ? <div className=''>
                        <h2 className="text-[15px] font-semibold pt-[14px] leading-6 max-w-[205px] whitespace-nowrap ">Your Name</h2>
                        <p className="text-[12px] font-normal pt-[2px] text-[#606060] ">Your Channel</p>
                    </div> : ''
                }

            </div>

            {/* Navigation Items */}
            <div className={`  overflow-auto border-b dark:border-[rgba(255,255,255,0.1)] ${isSideBarExpand ? " overflow-y-auto max-h-[calc(100vh_-_370px)] " : ""}`}>
                <ul className=' py-[8px]'>
                    {
                        NavItems.map((item, index) => {
                            return (
                                <NavLink to={item.to} key={index}>
                                    <li className={`relative h-full ${location.pathname === item.to ? " text-[#c00] dark:text-[#ff4e45]" : ' text-[#606060]'} ${isSideBarExpand ? "pr-[20px] pl-[16px]" : 'px-[16px]'} flex items-center w-full min-h-[48px] hover:bg-[#f9f9f9] dark:hover:bg-[#1f1f1f] ${location.pathname === item.to ? 'bg-[#f9f9f9] dark:bg-[#1f1f1f]' : ''} cursor-pointer`}>
                                        <div className={`h-full w-[4px] absolute left-0 ${location.pathname === item.to ? "bg-[#c00] dark:bg-[#ff4e45]" : " bg-transparent"}`}></div>
                                        <div className=' ml-[8px] mr-[24px]'>
                                            <div className='w-[24px]'>
                                                {item.icon}
                                            </div>
                                        </div>
                                        {isSideBarExpand ? (
                                            <div className='font-semibold text-[15px] leading-6'>
                                                {item.item}
                                            </div>
                                        ) : ""}
                                    </li>
                                </NavLink>
                            );
                        })

                    }
                </ul>
            </div>

            {/* Bottom Section */}
            <div className=" mt-auto">
                <ul className='text-[#606060] py-[8px]  dark:text-[#aaa] font-semibold text-[15px] leading-6'>
                    {/* Other navigation items */}
                    <NavLink to={'/settings'}
                    >
                        <li className={`  relative h-full ${isSideBarExpand ? "pr-[20px] pl-[16px]" : 'px-[16px]'} flex items-center w-full min-h-[48px] hover:bg-[#f9f9f9] dark:hover:bg-[#1f1f1f] ${location.pathname === '/settings' ? 'bg-[#f9f9f9] dark:bg-[#1f1f1f]' : ''} cursor-pointer`}>
                            <div className={`h-full w-[4px] absolute left-0`}></div>
                            <div className='ml-[8px] mr-[24px]'>
                                <div className=' w-[24px]'>
                                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className=" w-full h-full" ><g width="24" height="24" fill={` ${'#606060'}`} viewBox="0 0 24 24">
                                        <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z" class="style-scope tp-yt-iron-icon"></path>
                                    </g></svg>
                                </div>
                            </div>
                            {
                                isSideBarExpand ?
                                    <div className='font-semibold text-[15px] leading-6'>
                                        Settings
                                    </div>
                                    : ""
                            }

                        </li>
                    </NavLink>
                    <NavLink to={'/send-feedback'}
                    >

                        <li className={`relative h-full ${isSideBarExpand ? "pr-[20px] pl-[16px]" : 'px-[16px]'} flex items-center w-full min-h-[48px] hover:bg-[#f9f9f9] dark:hover:bg-[#1f1f1f] ${location.pathname === '/send-feedback' ? 'bg-[#f9f9f9] dark:bg-[#1f1f1f]' : ''} cursor-pointer`}>
                            <div className={`h-full w-[4px] absolute left-0 `}></div>
                            <div className='ml-[8px] mr-[24px]'>
                                <div className=' w-[24px]'>
                                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className=" w-full h-full" ><g fill={`${'#606060'}`} width="24" height="24" viewBox="0 0 24 24" >
                                        <path d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z" class="style-scope tp-yt-iron-icon"></path>
                                    </g></svg>
                                </div>
                            </div>
                            {
                                isSideBarExpand ?
                                    <div className='font-semibold text-[15px] leading-6'>
                                        Send Feedback
                                    </div>
                                    : ""
                            }

                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;


