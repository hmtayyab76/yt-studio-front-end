import React from 'react'

function SendFeedbackIcon({ isActive, activePath, nonActivePath }) {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className=" w-full h-full" >
            <g width="24" height="24" viewBox="0 0 24 24" fill={`${isActive ? '#c00' : '#606060'}`} className={`  ${isActive ? "dark:fill-[#ff4e45]" : 'dark:fill-[#606060]'}`} >
                {
                    isActive ?
                        (<>
                            <path d="M11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15ZM13 3V9H21V3H13Z" class="style-scope tp-yt-iron-icon"></path>

                        </>
                        )
                        :
                        <path d="M10 16V20H4V16H10ZM11 15H3V21H11V15ZM20 4V8H14V4H20ZM21 3H13V9H21V3ZM3 3V13H11V3H3ZM10 12H4V4H10V12ZM13 11V21H21V11H13ZM20 20H14V12H20V20Z"></path>
                }

            </g>
        </svg >
    )
}

export default SendFeedbackIcon