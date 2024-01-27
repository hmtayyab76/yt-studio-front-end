import React from 'react'

function AnalyticeIcon({ isActive }) {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className=" w-full h-full" >
            <g width="24" height="24" viewBox="0 0 24 24" fill={`${isActive ? '#c00' : '#606060'}`} className={`  ${isActive ? "dark:fill-[#ff4e45]" : 'dark:fill-[#606060]'}`} >
                {
                    isActive ?
                        (<>
                            <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V14H17V17Z" class="style-scope tp-yt-iron-icon"></path>
                        </>
                        )
                        :
                        <path d="M9 17H7V10H9V17ZM13 7H11V17H13V7ZM17 14H15V17H17V14ZM20 4H4V20H20V4ZM21 3V21H3V3H21Z" class="style-scope tp-yt-iron-icon"></path>
                }

            </g>
        </svg >
    )
}

export default AnalyticeIcon