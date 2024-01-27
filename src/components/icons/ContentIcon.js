import React from 'react'

function ContentIcon({ isActive, activePath, nonActivePath }) {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" fill='#c00' className=" w-full h-full" >
          <g width="24" height="24" viewBox="0 0 24 24" fill={`${isActive ? '#c00' : '#606060'}`} className={`  ${isActive ? "dark:fill-[#ff4e45]" : 'dark:fill-[#606060]'}`} >
                {
                    isActive ?
                        (<>
                            <path d="M4 5.99982H3V20.9998H18V19.9998H4V5.99982Z" class="style-scope tp-yt-iron-icon"></path>
                            <path d="M6 2.99982V17.9998H21V2.99982H6ZM11 13.9998V6.99982L17 10.4998L11 13.9998Z" class="style-scope tp-yt-iron-icon"></path>
                        </>
                    )
                    :
                    (

                        <>
                            <path d="M11 6.99982V13.9998L17 10.4998L11 6.99982Z" />
                            <path d="M18 20.9998H3V5.99982H4V19.9998H18V20.9998ZM21 2.99982H6V17.9998H21V2.99982ZM7 3.99982H20V16.9998H7V3.99982Z" />
                        </>
                    )
                }

            </g>
        </svg >
    )
}

export default ContentIcon