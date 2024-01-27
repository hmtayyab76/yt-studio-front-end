import React from 'react'

function AudioLibraryIcon({ isActive, activePath, nonActivePath }) {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className=" w-full h-full" >
            <g width="24" height="24" viewBox="0 0 24 24" fill={`${isActive ? '#c00' : '#606060'}`} className={`  ${isActive ? "dark:fill-[#ff4e45]" : 'dark:fill-[#606060]'}`} >
                {
                    isActive ?
                        (<>
                            <path d="M18 21L3 21L3 6L4 6L4 20L18 20L18 21ZM21 3L21 18L6 18L6 3L21 3ZM16 6L13 6L13 11.28C12.7 11.11 12.37 11 12 11C10.9 11 10 11.9 10 13C10 14.1 10.9 15 12 15C13.1 15 14 14.1 14 13L14 8L16 8L16 6Z" class="style-scope tp-yt-iron-icon"></path>
                        </>
                        )
                        :
                        <path d="M16 6L16 8L14 8L14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C12.37 11 12.7 11.11 13 11.28L13 6L16 6ZM18 20L4 20L4 6L3 6L3 21L18 21L18 20ZM21 3L6 3L6 18L21 18L21 3ZM7 4L20 4L20 17L7 17L7 4Z" class="style-scope tp-yt-iron-icon"></path>
                }

            </g>
        </svg >
    )
}

export default AudioLibraryIcon