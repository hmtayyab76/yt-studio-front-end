import React from 'react'

function EarnIcon({ isActive, activePath, nonActivePath }) {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className=" w-full h-full" >
           <g width="24" height="24" viewBox="0 0 24 24" fill={`${isActive ? '#c00' : '#606060'}`} className={`  ${isActive ? "dark:fill-[#ff4e45]" : 'dark:fill-[#606060]'}`} >
                {
                    isActive ?
                        (<>
                        <path d="M9 7V11H15C16.1 11 17 11.9 17 13V17C17 18.1 16.1 19 15 19H13V21H11V19H7V17H15V13H9C7.9 13 7 12.1 7 11V7C7 5.9 7.9 5 9 5H11V3H13V5H17V7H9Z" class="style-scope tp-yt-iron-icon"></path>
                    </>
                    )
                    :
                    <path d="M8 7V10C8 10.55 8.45 11 9 11H15C16.1 11 17 11.9 17 13V17C17 18.1 16.1 19 15 19H13V21H11V19H7V18H15C15.55 18 16 17.55 16 17V13C16 12.45 15.55 12 15 12H9C7.9 12 7 11.1 7 10V7C7 5.9 7.9 5 9 5H11V3H13V5H17V6H9C8.45 6 8 6.45 8 7Z" class="style-scope tp-yt-iron-icon"></path>
                }

            </g>
        </svg >
    )
}

export default EarnIcon