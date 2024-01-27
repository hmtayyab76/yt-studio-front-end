
import React, { useState } from 'react'
import { Drawer } from 'antd';

function Revenue({ children }) {

    const [activeTab, setActiveTab] = useState('all');
    const [open, setOpen] = useState(false);
    const [showChart, setshowChart] = useState(false);


    const showRevenueChart = () => {
        setshowChart(true)
    }
    const closeRevenue = () => {
        setshowChart(false)
    }
    const showLargeDrawer = () => {

        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <div>
            <div className=' px-[24px]'>
                <ul className=' flex flex-wrap items-center dark:text-[white] font-normal text-[12px] gap-4' id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <li
                        onClick={() => handleTabClick('all')}
                        role="presentation" className={` border-[1px] rounded-2xl px-3 py-1 cursor-pointer dark:border-[#000]  ${activeTab === 'all' ? 'bg-[#3ea6ff60] dark:border-[#3ea6ff60] text-[#3ea6ff]' : ''} `} >
                        <button
                            role="tab"
                            aria-controls="all"
                            aria-selected={activeTab === 'all'}
                        >
                            All
                        </button>

                    </li>
                    <li
                        onClick={() => handleTabClick('Watchpageads')}
                        role="presentation" className={` border-[1px] rounded-2xl px-3 py-1 cursor-pointer dark:border-[#000]  ${activeTab === 'Watchpageads' ? 'bg-[#3ea6ff60] dark:border-[#3ea6ff60] text-[#3ea6ff]' : ''} `} >
                        <button
                            role="tab"
                            aria-controls="Watchpageads"
                            aria-selected={activeTab === 'Watchpageads'}
                        >
                            Watch page ads
                        </button>

                    </li>
                    <li
                        onClick={() => handleTabClick('shortFeedads')}
                        role="presentation" className={` border-[1px] rounded-2xl px-3 py-1 cursor-pointer dark:border-[#000]  ${activeTab === 'shortFeedads' ? 'bg-[#3ea6ff60] dark:border-[#3ea6ff60] text-[#3ea6ff]' : ''} `} >
                        <button
                            role="tab"
                            aria-controls="shortFeedads"
                            aria-selected={activeTab === 'shortFeedads'}
                        >
                            Short Feed ads
                        </button>

                    </li>
                    <li
                        onClick={() => handleTabClick('memberships')}
                        role="presentation" className={` border-[1px] rounded-2xl px-3 py-1 cursor-pointer dark:border-[#000]  ${activeTab === 'memberships' ? 'bg-[#3ea6ff60] dark:border-[#3ea6ff60] text-[#3ea6ff]' : ''} `} >
                        <button
                            role="tab"
                            aria-controls="memberships"
                            aria-selected={activeTab === 'memberships'}
                        >
                            Memberships
                        </button>

                    </li>
                    <li
                        onClick={() => handleTabClick('supers')}
                        role="presentation" className={` border-[1px] rounded-2xl px-3 py-1 cursor-pointer dark:border-[#000]  ${activeTab === 'supers' ? 'bg-[#3ea6ff60] dark:border-[#3ea6ff60] text-[#3ea6ff]' : ''} `} >
                        <button
                            role="tab"
                            aria-controls="supers"
                            aria-selected={activeTab === 'supers'}
                        >
                            Supers
                        </button>
                    </li>
                </ul>
                <div id="default-tab-content">
                    <div className={` overflow-x-auto min-w-[1200px] p-4 rounded-lg ${activeTab === 'all' ? '' : 'hidden'}`} id="all" role="tabpanel" aria-labelledby="all-tab">
                        <div className='border px-5 relative dark:border-[rgba(255,255,255,0.1)] my-5'>
                            <div className=' flex absolute justify-center mt-4 items-center right-[43%]'>
                                <div className=' text-center font-medium text-[15px] dark:text-[#aaa]'>Estimatd Revenue</div>
                                <svg width={20} height={20} viewBox="0 0 24 24" className=' ml-3 mt-1' preserveAspectRatio="xMidYMid meet" focusable="false" ><g className=" dark:fill-[#909090]" fill="#a9a9a9" ><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" ></path></g></svg>
                            </div>
                            <div className=' absolute right-[44%] top-[44px]'>
                                <svg width={20} height={20} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"  ><g className=" dark:fill-[#909090] dark:bg-white" fill="#a9a9a9" version="1.1" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" ><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18.41l-4.71-4.71l1.41-1.41L11,14.59V6h2v8.59 l2.29-2.29l1.41,1.41L12,18.41z" >
                                </path>
                                </g>
                                </svg>
                            </div>
                            {children}

                            <div className=' text-[#3ea6ff] text-sm py-[8px] my-[12px] ml-[16px] cursor-pointer ' onClick={showRevenueChart}> Show More </div>
                            <Drawer
                                placement="top"
                                width={'100%'}
                                height={'100%'}
                                onClose={closeRevenue}
                                open={showChart}
                            >
                                <p>Show Revenue</p>
                            </Drawer>
                        </div>
                        <div className=' grid grid-cols-12 gap-6 '>
                            <div className='border dark:border-[rgba(255,255,255,0.1)] col-span-6 '>
                                <div className=' px-[24px] pb-[24px] pt-[22px] family-robo'>
                                    <div className=' font-medium text-lg leading-6 pb-[2px] dark:text-white'>How much you're earning</div>
                                    <div className=' font-normal text-[13px] leading-5 dark:text-[#aaa] pt-0 pb-[18px] family-robo'>Estimated last six months</div>
                                    <div className=' leading-6 font-normal text-[15px] dark:text-[#aaa]'>Not enough viewer data to show this report</div>

                                    <div className=' text-[#3ea6ff] text-sm py-[8px] my-[12px]  cursor-pointer ' onClick={showLargeDrawer}> Show More </div>
                                    <>
                                        <Drawer
                                            placement="top"
                                            width={'100%'}
                                            height={'100%'}
                                            onClose={onClose}
                                            open={open}
                                        >
                                            <p>Show More</p>
                                        </Drawer>
                                    </>

                                </div>
                            </div>
                            <div className='border dark:border-[rgba(255,255,255,0.1)]  col-span-6 '>
                                <div className=' px-[24px] pb-[24px] pt-[22px] family-robo'>
                                    <div className=' font-medium text-lg leading-6 pb-[2px] dark:text-white'>Content Perfomance</div>
                                    <div className=' font-normal text-[13px] leading-5 dark:text-[#aaa] pt-0 pb-[18px] family-robo'>Last 28 Days</div>
                                    <div className=' leading-6 font-normal text-[15px] dark:text-[#aaa]'>Not enough viewer data to show this report</div>
                                    <div className=' text-[#3ea6ff] text-sm py-[8px] my-[12px] cursor-pointer '> Show More </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`p-4 rounded-lg ${activeTab === 'Watchpageads' ? '' : 'hidden'}`} id="Watchpageads" role="tabpanel" aria-labelledby="all-tab">
                        Watch Page Ads
                    </div>
                    <div className={`p-4 rounded-lg ${activeTab === 'shortFeedads' ? '' : 'hidden'}`} id="shortFeedads" role="tabpanel" aria-labelledby="all-tab">
                        Shorts
                    </div>
                    <div className={`p-4 rounded-lg ${activeTab === 'memberships' ? '' : 'hidden'}`} id="memberships" role="tabpanel" aria-labelledby="all-tab">
                        Membership
                    </div>
                    <div className={`p-4 rounded-lg ${activeTab === 'supers' ? '' : 'hidden'}`} id="supers" role="tabpanel" aria-labelledby="all-tab">
                        Supers
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Revenue



