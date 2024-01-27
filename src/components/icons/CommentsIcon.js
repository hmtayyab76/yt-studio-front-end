import React from 'react'

function CommentsIcon({ isActive, activePath, nonActivePath }) {
    return (
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className=" w-full h-full" >
           <g width="24" height="24" viewBox="0 0 24 24" fill={`${isActive ? '#c00' : '#606060'}`} className={`  ${isActive ? "dark:fill-[#ff4e45]" : 'dark:fill-[#606060]'}`} >
                {
                    isActive ?
                        (<>
                        <path d="M4 2V17H15L20 22V2H4ZM8 11H13V13H8V11ZM8 7H16V9H8V7Z" class="style-scope tp-yt-iron-icon"></path>
                    </>
                    )
                    :
                    <path d="M8 7H16V9H8V7ZM8 13H13V11H8V13ZM5 3V16H15H15.41L15.7 16.29L19 19.59V3H5ZM4 2H20V22L15 17H4V2Z" class="style-scope tp-yt-iron-icon"></path>

                }

            </g>
        </svg >
    )
}

export default CommentsIcon