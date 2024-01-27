import { AutoComplete } from 'antd'
import React from 'react'

function SearchBar() {
    const options = [
        { value: 'Your Recent Videos' },
    ];
    return (
        <div className=" w-full">
            <div className="relative  rounded-md shadow-sm border-[1px] border-[#ccc] dark:border-[#606060] bg-white dark:bg-transparent  dark:border-[rgba(255,255,255,0.1)] ">
                <div className="pointer-events-none absolute inset-y-0 left-[16px] flex items-center z-50">
                    <span className=" w-[22px]">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                            className=" w-full h-full cursor-pointer"
                        >
                            <g fill="#606060">
                                <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
                            </g>
                        </svg>
                    </span>
                </div>
                <AutoComplete
                    notFoundContent='Videos (0)'
                    bordered={false}
                    popupClassName={' dark:bg-[#282828] rounded-none shadow-none border dark:border-none dark:text-[#fff] !rounded-none dark:placeholder:text-[#606060]  font-[500]'}
                    className="block font-semibold h-[36px]  text-[15px] bg-transparent w-full dark:bg-transparent  leading-[18px] pb-[2px] font-smibold text-[#cccccc] dark:text-[#fff]"
                    options={options}
                    placeholder="Search accros your channel"
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />
            </div>

        </div>
    )
}

export default SearchBar