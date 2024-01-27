import React from 'react'

function SubtitleIcon({ isActive, activePath, nonActivePath }) {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className=" w-full h-full" >
            <g width="24" height="24" viewBox="0 0 24 24" fill={`${isActive ? '#c00' : '#606060'}`} className={`  ${isActive ? "dark:fill-[#ff4e45]" : 'dark:fill-[#606060]'}`} >
                {
                    isActive ?
                        (<>
                            <path d="M2 6V20H22V6H2ZM5 11H7V13H5V11ZM15 17H5V15H15V17ZM19 17H17V15H19V17ZM19 13H9V11H19V13Z" class="style-scope tp-yt-iron-icon"></path>

                        </>
                        )
                        :
                        <path d="M5 11H7V13H5V11ZM15 15H5V17H15V15ZM19 15H17V17H19V15ZM19 11H9V13H19V11ZM22 6H2V20H22V6ZM3 7H21V19H3V7Z" class="style-scope tp-yt-iron-icon"></path>
                }

            </g>
        </svg >
    )
}

export default SubtitleIcon