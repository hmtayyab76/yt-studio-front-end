/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Revenue from './Revenue';
import { Dropdown } from 'antd';
import ApexCharts from 'apexcharts';
import { options } from './options';

function Analytics({ children, FileData }) {
    // const [selectedT, setSelectedT] = useState('')
    const [selectedDate] = useState('Nov 29 - Dec 26, 2023')
    const [filterparamsName] = useState('Last 7 days');

    const location = useLocation();
    // const navigate = useNavigate();

    const getActiveTabFromURL = () => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get('tab') || 'revenue';
    };



    const [activeTab, setActiveTab] = useState(getActiveTabFromURL);

    let [searchParams, setSearchParams] = useSearchParams();


    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setSearchParams(`?tab=${tab}`)
        if (searchParams === '?tab=revenue') {
            setSearchParams('')
        }

    };


    var resetCssClasses = function (activeEl) {
        var els = document.querySelectorAll('li')
        Array.prototype.forEach.call(els, function (el) {
            el.classList.remove('active')
        })

        activeEl.target.classList.add('active')
    }
    const handleFilterClick = (e) => {
        resetCssClasses(e)
    };

    useEffect(() => {
        const handlePopState = () => {
            setActiveTab(getActiveTabFromURL());
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const chartRef = useRef(null);


    var chart;
    useLayoutEffect(() => {
        if (chartRef.current && FileData?.length > 0) {


            const chartOptions = {
                annotations: {
                    xaxis: [

                        {
                            x: new Date("26 Nov 2022").getTime(),
                            x2: new Date("28 Nov 2021").getTime(),
                            borderColor: "red",
                            background: 'red',
                            // opacity: ,
                            label: {
                                borderColor: "#B3F7CA",
                                style: {
                                    fontSize: "10px",
                                    color: "#fff",
                                    background: "#00E396"
                                },
                                offsetY: -10,
                                text: ""
                            }
                        }
                    ],

                },
                series: [{
                    data: FileData.slice(0, FileData.length - 1)
                }], ...options
                ,
                title: {
                    text: FileData.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0),
                    align: 'center',
                    margin: 0,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                        fontSize: '22px',
                        fontWeight: 'bold',
                        fontFamily: undefined,
                        color: '#aaa'
                    },
                },
            };

            chart = new ApexCharts(chartRef.current, chartOptions);
            chart.render();
        }
    }, [chartRef]);

    const handleDateRangeClick = (event, days) => {
        handleFilterClick(event);
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - days);
        chart.zoomX(startDate.getTime(), endDate.getTime());
    };

    const handleLifetimeClick = (event) => {
        handleFilterClick(event);
        chart.zoomX(
            new Date('23 Jan 2000').getTime(),
            new Date().getTime()
        );
    };

    return (
        <>
            <div className=' flex justify-between items-center w-full px-[32px] pt-[23px]'>
                <h1 className=' text-[25px] font-semibold dark:text-[#fff]'>Channel Analytics</h1>
                <h2 className=' uppercase text-[#065fd4] dark:text-[#3ea6ff] font-medium text-sm'>Advanced Mode</h2>
            </div>
            <div className="my-4 overflow-x-auto gap-2 flex border-b dark:border-b-[rgba(255,255,255,0.1)] justify-between px-[24px] border-gray-200 text-[#606060] text-[15px] font-semibold dark:border-gray-700">
                <ul className="flex flex-wrap text-center dark:text-[#a0a0a0]" role="tablist">
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block py-4 mr-4 rounded-t-lg  ${activeTab === 'overview' ? 'border-b-[#065FD4] dark:border-[#3ea6ff] border-b-[4px]   text-[#065FD4] dark:text-[#3ea6ff]' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                            onClick={() => handleTabClick('overview')}
                            role="tab"
                            aria-controls="overview"
                            aria-selected={activeTab === 'overview'}
                        >
                            Overview
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block py-4 mr-4 rounded-t-lg  ${activeTab === 'content' ? 'border-b-[#065FD4] dark:border-[#3ea6ff] border-b-[4px]   text-[#065FD4] dark:text-[#3ea6ff]' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                            onClick={() => handleTabClick('content')}
                            role="tab"
                            aria-controls="content"
                            aria-selected={activeTab === 'content'}
                        >
                            Content
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block py-4 mr-4 rounded-t-lg  ${activeTab === 'audience' ? 'border-b-[#065FD4] dark:border-[#3ea6ff] border-b-[4px]   text-[#065FD4] dark:text-[#3ea6ff]' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                            onClick={() => handleTabClick('audience')}
                            role="tab"
                            aria-controls="audience"
                            aria-selected={activeTab === 'audience'}
                        >
                            Audience
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                            className={`inline-block py-4 mr-4 rounded-t-lg  ${activeTab === 'revenue' ? 'border-b-[#065FD4] dark:border-[#3ea6ff] border-b-[4px]   text-[#065FD4] dark:text-[#3ea6ff]' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                            onClick={() => handleTabClick('revenue')}
                            role="tab"
                            aria-controls="revenue"
                            aria-selected={activeTab === 'revenue'}
                        >
                            Revenue
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                            className={`inline-block py-4 mr-4 rounded-t-lg  ${activeTab === 'research' ? 'border-b-[#065FD4] dark:border-[#3ea6ff] border-b-[4px]   text-[#065FD4] dark:text-[#3ea6ff]' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
                            onClick={() => handleTabClick('research')}
                            role="tab"
                            aria-controls="research"
                            aria-selected={activeTab === 'research'}
                        >
                            Research
                        </button>
                    </li>
                </ul>
                <div className=' w-[200px]'>
                    <Dropdown
                        placement="topLeft"
                        dropdownRender={() => (
                            <>
                                <div className=' w-[250px] -mt-[50px] bg-white text-[#0d0d0d] dark:bg-[#212121] custome-shadow-1 dark:text-[#fff] rounded-md family-robo max-w-[300px]'>
                                    <ul className=' py-[8px] filterDate'>
                                        <li
                                            className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => handleDateRangeClick(e, 7)}
                                        >
                                            Last 7 Days
                                        </li>
                                        <li
                                            className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => handleDateRangeClick(e, 28)}
                                        >
                                            Last 28 Days
                                        </li>
                                        <li
                                            className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => handleDateRangeClick(e, 90)}
                                        >
                                            Last 90 Days
                                        </li>
                                        <li
                                            className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => handleDateRangeClick(e, 365)}
                                        >
                                            Last 365 Days
                                        </li>
                                        <li
                                            className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => handleLifetimeClick(e)}
                                        >
                                            Lifetime
                                        </li>
                                        <li className=' w-full h-[1px] bg-[#e5e5e5] dark:bg-[rgba(255,255,255,0.1)] my-1'></li>
                                        <li className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => {
                                                handleFilterClick(e)
                                                chart.zoomX(
                                                    new Date('01 Jan 2023').getTime(),
                                                    new Date('31 Dec 2023').getTime()
                                                )
                                            }}
                                        >2023</li>
                                        <li className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => {
                                                handleFilterClick(e)
                                                chart.zoomX(
                                                    new Date('01 Jan 2022').getTime(),
                                                    new Date('31 Dec 2022').getTime()
                                                )
                                            }}
                                        >2022</li>
                                        <li className=' w-full h-[1px] bg-[#e5e5e5] dark:bg-[rgba(255,255,255,0.1)] my-1'></li>
                                        <li className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => {
                                                handleFilterClick(e)
                                                chart.zoomX(
                                                    new Date('01 Dec').getTime(),
                                                    new Date('31 Dec').getTime()
                                                )
                                            }}
                                        >December</li>
                                        <li className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => {
                                                handleFilterClick(e)
                                                chart.zoomX(
                                                    new Date('01 Oct').getTime(),
                                                    new Date('30 Oct').getTime()
                                                )
                                            }}
                                        >October</li>
                                        <li className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => {
                                                handleFilterClick(e)
                                                chart.zoomX(
                                                    new Date('01 Nov').getTime(),
                                                    new Date('27 Nov').getTime()
                                                )
                                            }}
                                        >November</li>
                                        <li className=' w-full h-[1px] bg-[#e5e5e5] dark:bg-[rgba(255,255,255,0.1)] my-1'></li>
                                        <li className={`font-normal leading-6 text-[15px] py-[3px] px-[24px] cursor-pointer `}
                                            onClick={(e) => {

                                                handleFilterClick(e)
                                                chart.zoomX(
                                                    new Date('01 Jan 2021').getTime(),
                                                    new Date('31 Dec 2022').getTime()
                                                )
                                            }}
                                        >Custom</li>
                                    </ul>
                                </div>
                            </>
                        )}
                        trigger={['click']}
                    >
                        <div className=' rounded-full flex items-center justify-between cursor-pointer family-robo '>
                            <div>
                                <div className=' font-normal text-[12px] leading-4 mt-[8px] dark:text-[#aaa]'>
                                    {selectedDate}
                                </div>
                                <div className=' font-normal leading-6 text-[15px] text-[#0d0d0d] dark:text-white'>
                                    {filterparamsName}
                                </div>
                            </div>
                            <svg viewBox="0 0 24 24" width={22} height={22} preserveAspectRatio="xMidYMid meet" focusable="false" className=" mr-[4px]" ><g fill='#aaa'><path d="M18,9l-6,6L6,9H18z" ></path></g></svg>
                        </div>
                    </Dropdown>
                </div>
            </div>
            <div id="default-tab-content" className=' mt-4'>
                <div
                    className={`p-4 rounded-lg ${activeTab === 'overview' ? ' ' : 'hidden'}`}
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                >
                </div>
                <div
                    className={`p-4 rounded-lg ${activeTab === 'content' ? ' ' : 'hidden'}`}
                    role="tabpanel"
                    aria-labelledby="content-tab"
                >
                    Content
                </div>
                <div
                    className={`p-4 rounded-lg ${activeTab === 'audience' ? ' ' : 'hidden'}`}
                    role="tabpanel"
                    aria-labelledby="audience-tab"
                >
                    Audience
                </div>
                <div
                    className={`rounded-lg ${activeTab === 'revenue' ? ' dark:bg-[#282828]' : 'hidden'}`}
                    role="tabpanel"
                    aria-labelledby="revenue-tab"
                >
                    <Revenue>
                        <div>
                            <div id="chart" className='mt-10' ref={chartRef}></div>
                        </div>
                    </Revenue>
                </div>
                <div
                    className={`p-4 rounded-lg ${activeTab === 'research' ? ' ' : 'hidden'}`}
                    role="tabpanel"
                    aria-labelledby="revenue-tab"
                >
                    Research
                </div>
            </div>


        </>
    )
}

export default Analytics




