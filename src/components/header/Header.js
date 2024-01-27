import { Dropdown, Modal, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function Header({ setIsSideBarExpand, isSideBarExpand }) {
    const [themeCheck, setthemeCheck] = useState(localStorage.theme === undefined ? 'light' : localStorage.theme)
    const [showapearance, setapearanceOpen] = useState(false)
    const [showswitchAccount, setswitchAccount] = useState(false)
    const [showProfile, setshoeProfile] = useState(true);

    const [open, setOpen] = useState(false);


    const showModal = () => {

        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
    };
    const setLightTheme = () => {
        setthemeCheck('light')
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        updateImageSource();
    };

    const setDarkTheme = () => {
        setthemeCheck('dark')
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        updateImageSource();
    };


    useEffect(() => {
        // Check if the theme is set in localStorage
        const savedTheme = localStorage.theme;
        // Apply the saved theme or default to dark theme
        if (savedTheme === "light") {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }, []);

    const updateImageSource = () => {
        const logoImg = document.getElementById("logo"); // Assuming you have an element with the id 'logo'
        if (logoImg) {
            logoImg.src =
                localStorage.theme === "dark"
                    ? "https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"
                    : "https://www.gstatic.com/youtube/img/creator/yt_studio_logo.svg";
        }
    };
    // window.addEventListener("load",);


    useEffect(() => {
        const handleResize = () => {
            setIsSideBarExpand(window.innerWidth >= 1200);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className=" py-[12px] pr-[24px] pl-[16px] w-full  header-shadow dark:bg-[#282828]">
            <div className="flex  justify-between items-center gap-4">
                <div className="flex items-center">
                    <div className="p-[8px] mr-[16px]">
                        <div
                            className=" w-[25px]"
                            onClick={() => {
                                setIsSideBarExpand(!isSideBarExpand);
                            }}
                        >
                            <Tooltip
                                placement="bottomLeft"
                                overlayInnerStyle={{
                                    backgroundColor: "#6c6c6c",
                                    fontSize: "10px",
                                    padding: "10px",
                                    marginTop: "18px",
                                    fontWeight: "500",
                                }}
                                title={"Expand Menu"}
                                arrow={false}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                    className="cursor-pointer w-full h-full text-inherit"
                                >
                                    <g fill="#606060" className=" dark:fill-[#a0a0a0]">
                                        <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
                                    </g>
                                </svg>
                            </Tooltip>
                        </div>
                    </div>
                    <div className=" w-[98px] cursor-pointer">
                        <Tooltip
                            placement="bottomLeft"
                            overlayInnerStyle={{
                                backgroundColor: "#6c6c6c",
                                fontSize: "10px",
                                padding: "10px",
                                marginTop: "18px",
                                fontWeight: "500",
                            }}
                            title={"Youtube Studio Dashboard"}
                            arrow={false}
                        >
                            <img
                                id="logo"
                                src={`${localStorage.theme === "dark"
                                    ? "https://www.gstatic.com/youtube/img/creator/yt_studio_logo_white.svg"
                                    : "https://www.gstatic.com/youtube/img/creator/yt_studio_logo.svg"
                                    }`}
                                alt="Logo"
                                className=" w-full h-full"
                            />
                        </Tooltip>
                    </div>
                </div>
                <div className=" w-[500px] md:block hidden">
                    <div className="w-full " onClick={showModal}>
                        <div className=" w-full ">
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
                                <div
                                    className="block dark:bg-[#282828] pl-12 pt-[8px] font-semibold h-[36px]  text-[15px] bg-transparent w-full rounded-md dark:bg-transparent  leading-[18px] pb-[2px] font-smibold text-[#cccccc] dark:text-[#606060]"
                                >
                                    Search accros your channel
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" col-span-4 flex items-center gap-4 justify-end">

                    <span className=" w-[22px] md:hidden" onClick={showModal}>
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
                    <div className=" md:hidden">
                        <Modal
                            closeIcon={false}
                            style={{ padding: 0, background: '#282828', outline: 0, top: 12 }}
                            width='550px'

                            open={open}
                            onOk={hideModal}
                            onCancel={hideModal}
                            cancelText={false}
                            footer={null}
                            hea
                        >
                            <SearchBar />
                        </Modal>
                    </div>
                    <div className=" w-[25px]">
                        <Tooltip
                            placement="bottomLeft"
                            overlayInnerStyle={{
                                backgroundColor: "#6c6c6c",
                                fontSize: "10px",
                                padding: "10px",
                                marginTop: "18px",
                                fontWeight: "500",
                            }}
                            title={"Help"}
                            arrow={false}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                preserveAspectRatio="xMidYMid meet"
                                focusable="false"
                                className=" w-full h-full cursor-pointer"
                            >
                                <g className=" fill-[#606060] dark:fill-[#a0a0a0]">
                                    <path
                                        d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                                        className="style-scope tp-yt-iron-icon"
                                    ></path>
                                </g>
                            </svg>
                        </Tooltip>
                    </div>
                    <Dropdown
                        placement="topLeft"
                        dropdownRender={() => (
                            <>

                                <div className=" custome-shadow-1 w-[200px] bg-white text-[#0d0d0d] dark:bg-[#212121] custome-shadow dark:text-[#fff] rounded-md family-robo max-w-[300px]">
                                    <ul className=" py-[8px]">
                                        <li className=" font-normal leading-6 cursor-pointer text-[15px] py-[3px] px-[24px]  flex items-center pb-[12px] pt-[3px]">
                                            <svg
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                focusable="false"
                                                width={24}
                                                height={24}
                                                className=" mr-[16px]"

                                            >
                                                <g class="style-scope tp-yt-iron-icon" className=" dark:fill-[#909090]">
                                                    <path
                                                        d="M17,18v1H6V18ZM6.49,9l.71.71L11,5.91V16h1V5.91l3.8,3.81L16.51,9l-5-5Z"

                                                    ></path>
                                                </g>
                                            </svg>
                                            <div className="  font-normal text-[15px] leading-6 family-robo">Upload videos</div>
                                        </li>
                                        <li className=" font-normal leading-6 cursor-pointer text-[15px] py-[3px] px-[24px]  flex items-center pb-[12px] pt-[3px] ">
                                            <svg
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                focusable="false"
                                                width={24}
                                                height={24}
                                                className=" mr-[16px]"
                                            >
                                                <g
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    className=" dark:fill-[#909090]"
                                                >
                                                    <path
                                                        d="M14 11.9999C14 13.0999 13.1 13.9999 12 13.9999C10.9 13.9999 10 13.0999 10 11.9999C10 10.8999 10.9 9.99992 12 9.99992C13.1 9.99992 14 10.8999 14 11.9999ZM8.48 8.44992L7.77 7.74992C6.68 8.82992 6 10.3399 6 11.9999C6 13.6599 6.68 15.1699 7.77 16.2499L8.48 15.5399C7.57 14.6399 7 13.3899 7 11.9999C7 10.6099 7.57 9.35992 8.48 8.44992ZM16.23 7.74992L15.52 8.45992C16.43 9.35992 17 10.6099 17 11.9999C17 13.3899 16.43 14.6399 15.52 15.5499L16.23 16.2599C17.32 15.1699 18 13.6599 18 11.9999C18 10.3399 17.32 8.82992 16.23 7.74992ZM5.65 5.62992L4.95 4.91992C3.13 6.72992 2 9.23992 2 11.9999C2 14.7599 3.13 17.2699 4.95 19.0799L5.66 18.3699C4.02 16.7399 3 14.4899 3 11.9999C3 9.50992 4.02 7.25992 5.65 5.62992ZM19.05 4.91992L18.34 5.62992C19.98 7.25992 21 9.50992 21 11.9999C21 14.4899 19.98 16.7399 18.35 18.3699L19.06 19.0799C20.87 17.2699 22 14.7599 22 11.9999C22 9.23992 20.87 6.72992 19.05 4.91992Z"

                                                    ></path>
                                                </g>
                                            </svg>
                                            <div className="  font-normal text-[15px] leading-6 family-robo">Go live</div>
                                            <div></div>
                                        </li>
                                        <li className=" font-normal leading-6 cursor-pointer text-[15px] py-[3px] px-[24px]  flex items-center pb-[12px] pt-[3px]">
                                            <svg
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                focusable="false"
                                                width={24}
                                                height={24}
                                                className=" mr-[16px]"
                                            >
                                                <g class="style-scope tp-yt-iron-icon" className=" dark:fill-[#909090]">
                                                    <path
                                                        d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"

                                                    ></path>
                                                </g>
                                            </svg>
                                            <div className="  font-normal text-[15px] leading-6 family-robo">New playlist</div>
                                        </li>
                                        <li className=" font-normal leading-6 cursor-pointer text-[15px] py-[3px] px-[24px]  flex items-center pt-[3px]">
                                            <svg
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                focusable="false"
                                                width={24}
                                                height={24}
                                                className=" mr-[16px]"

                                            >
                                                <g class="style-scope tp-yt-iron-icon" className=" dark:fill-[#909090]" >
                                                    <path
                                                        d="M6,12c0-3.31,2.69-6,6-6s6,2.69,6,6c0,1.66-0.67,3.16-1.77,4.25l-0.71-0.71C16.44,14.63,17,13.38,17,12c0-2.76-2.24-5-5-5
	                                                        s-5,2.24-5,5c0,1.38,0.56,2.63,1.47,3.54l-0.71,0.71C6.67,15.16,6,13.66,6,12z M14,12c0-1.1-0.9-2-2-2s-2,0.9-2,2
	                                                        c0,0.74,0.4,1.38,1,1.72V22h2v-8.28C13.6,13.38,14,12.74,14,12z M4.94,19.08l0.71-0.71C4.01,16.74,3,14.49,3,12c0-4.96,4.04-9,9-9
	                                                        s9,4.04,9,9c0,2.49-1.01,4.74-2.65,6.37l0.71,0.71C20.88,17.27,22,14.77,22,12c0-5.52-4.48-10-10-10S2,6.48,2,12 C2,14.77,3.12,17.27,4.94,19.08z"

                                                    ></path>
                                                </g>
                                            </svg>
                                            <div className="  font-normal text-[15px] leading-6 family-robo">New podcast</div>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                        trigger={["click"]}
                    >
                        <div className=" flex border dark:border-[#3e3e3e] items-center p-[6px] cursor-pointer">
                            <div className=" w-[22px] ">
                                <svg
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                    className="text-[#c00] "
                                >
                                    <g className="style-scope tp-yt-iron-icon" fill="#c00">
                                        <path
                                            d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
                                            className="style-scope tp-yt-iron-icon"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                            <div className=" uppercase text-[14px] family-robo px-[8px] leading-5 font-medium  dark:text-[#fff]">
                                create
                            </div>
                        </div>
                    </Dropdown>

                    <div className=" w-8 h-8 cursor-pointer">
                        <Dropdown
                            dropdownRender={() => (
                                <>
                                    {
                                        showProfile ? (
                                            <div className=" bg-white custome-shadow-1 dark:bg-[#282828] dark:text-[#fff] profile-dropdown-style family-robo max-w-[300px] max-h-[350px] w-[300px]">
                                                <div className="border-b dark:border-[rgba(255,255,255,0.1)]">
                                                    <div className="flex p-[16px] items-center gap-4">
                                                        <div className=" w-10 h-10 rounded-full bg-slate-300"></div>
                                                        <div className="">
                                                            <h1 className="text-[#0d0d0d] family-robo dark:text-[#fff] font-normal text-[16px] leading-2">Muhammad Usman </h1>
                                                            <p className="text-[#0d0d0d] family-robo dark:text-[#fff] font-normal text-[16px] leading-2">@MuhammadUsman-pq3yn</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="  border-b dark:border-[rgba(255,255,255,0.1)] family-robo">
                                                    <ul className="py-[8px] px-0 ">
                                                        <li className=" py-[0px]  hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer pr-[36px] pl-[16px] flex gap-4 min-h-[48px] items-center ">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                preserveAspectRatio="xMidYMid meet"
                                                                focusable="false"
                                                                className="style-scope yt-icon"
                                                            >
                                                                <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                    <path
                                                                        d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"
                                                                        className="style-scope yt-icon"
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                            <div className=" font-normal text-[14px] family-robo">
                                                                Your Chennel
                                                            </div>
                                                        </li>
                                                        <li className=" py-[0px] hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer pr-[36px] pl-[16px] flex gap-4 min-h-[48px] items-center ">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                preserveAspectRatio="xMidYMid meet"
                                                                focusable="false"
                                                                className="style-scope yt-icon"
                                                            >
                                                                <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                    <path
                                                                        d="M10,9.35,15,12l-5,2.65ZM12,6a54.36,54.36,0,0,0-7.56.38A1.53,1.53,0,0,0,3.38,7.44,24.63,24.63,0,0,0,3,12a24.63,24.63,0,0,0,.38,4.56,1.53,1.53,0,0,0,1.06,1.06A54.36,54.36,0,0,0,12,18a54.36,54.36,0,0,0,7.56-.38,1.53,1.53,0,0,0,1.06-1.06A24.63,24.63,0,0,0,21,12a24.63,24.63,0,0,0-.38-4.56,1.53,1.53,0,0,0-1.06-1.06A54.36,54.36,0,0,0,12,6h0m0-1s6.25,0,7.81.42a2.51,2.51,0,0,1,1.77,1.77A25.87,25.87,0,0,1,22,12a25.87,25.87,0,0,1-.42,4.81,2.51,2.51,0,0,1-1.77,1.77C18.25,19,12,19,12,19s-6.25,0-7.81-.42a2.51,2.51,0,0,1-1.77-1.77A25.87,25.87,0,0,1,2,12a25.87,25.87,0,0,1,.42-4.81A2.51,2.51,0,0,1,4.19,5.42C5.75,5,12,5,12,5Z"
                                                                        className="style-scope yt-icon"
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                            <div className=" font-normal text-[14px] family-robo">
                                                                Youtube
                                                            </div>
                                                        </li>
                                                        <li onClick={() => {
                                                            setapearanceOpen(false)
                                                            setshoeProfile(false)
                                                            setswitchAccount(true)
                                                        }}
                                                            className=" py-[0px] hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer justify-between px-[16px] flex gap-4 min-h-[48px] items-center ">
                                                            <div className=" flex items-center gap-4">
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    width={24}
                                                                    height={24}
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                    focusable="false"
                                                                    className="style-scope yt-icon"
                                                                >
                                                                    <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                        <path
                                                                            d="M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z"
                                                                            className="style-scope yt-icon"
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                                <div className=" font-normal text-[14px] family-robo">
                                                                    Switch Account
                                                                </div>

                                                            </div>
                                                            <svg viewBox="0 0 24 24" width="24" height="24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g mirror-in-rtl="" fill="#606060" ><path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" class="style-scope yt-icon"></path></g></svg>

                                                        </li>
                                                        <li className=" py-[0px] hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer pr-[36px] pl-[16px] flex gap-4 min-h-[48px] items-center ">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                preserveAspectRatio="xMidYMid meet"
                                                                focusable="false"
                                                                className="style-scope yt-icon"
                                                            >
                                                                <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                    <path
                                                                        d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"
                                                                        className="style-scope yt-icon"
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                            <div className=" font-normal text-[14px] family-robo">
                                                                Sign Out
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="">
                                                    <ul className="py-[8px] px-0">
                                                        <li
                                                            className=" hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer py-[0px] px-[16px] flex min-h-[48px] justify-between items-center"
                                                            onClick={() => {
                                                                setapearanceOpen(true)
                                                                setshoeProfile(false)
                                                                setswitchAccount(false)
                                                            }}
                                                        >
                                                            <div className=" flex items-center  gap-4">
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    width={24}
                                                                    height={24}
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                    focusable="false"
                                                                    className="style-scope yt-icon"
                                                                >
                                                                    <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                        <path
                                                                            d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"
                                                                            className="style-scope yt-icon"
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                                <div className=" font-normal text-[14px] family-robo">
                                                                    Appearnace Device theme
                                                                </div>
                                                            </div>
                                                            <svg viewBox="0 0 24 24" width="24" height="24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g mirror-in-rtl="" fill="#606060" ><path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" class="style-scope yt-icon"></path></g></svg>

                                                        </li>
                                                        <li className="hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer py-[0px] pr-[36px] pl-[16px] flex gap-4 min-h-[48px] items-center ">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                preserveAspectRatio="xMidYMid meet"
                                                                focusable="false"
                                                                className="style-scope yt-icon"
                                                            >
                                                                <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                    <path
                                                                        d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
                                                                        className="style-scope yt-icon"
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                            <div className=" font-normal text-[14px] family-robo">
                                                                Send Feedback
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ) : ''


                                    }
                                    {
                                        showapearance ? (
                                            <div className=" custome-shadow-1 bg-white dark:bg-[#282828] dark:text-[#fff] profile-dropdown-style family-robo max-w-[300px] max-h-[350px] w-[300px]">
                                                <div className="flex p-[16px] items-center gap-4 cursor-pointer"
                                                    onClick={() => {
                                                        setapearanceOpen(false)
                                                        setshoeProfile(true)
                                                        setswitchAccount(false)

                                                    }}
                                                >
                                                    <svg viewBox="0 0 24 24" width={24} height={24} preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" ><g mirror-in-rtl="" className=" dark:fill-[#909090]" fill="#a9a9a9"><path d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z" class="style-scope yt-icon"></path></g></svg>
                                                    <div className="">Appearance</div>
                                                </div>
                                                <div className="">
                                                    <div className="border-b  dark:border-[rgba(255,255,255,0.1)]  cursor-pointer" >
                                                    </div>
                                                </div>
                                                <div className="family-robo">
                                                    <ul className="py-[8px] px-0 ">
                                                        <li className=" py-[0px] hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer pr-[36px] pl-[16px] flex gap-4 min-h-[48px] items-center ">
                                                            <p className=" text-[#606060] dark:text-[#aaaaaa] text-[12px]">Setting applies to this browser only</p>

                                                        </li>
                                                        <li onClick={setLightTheme} className=" relative py-[0px] hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer pr-[36px] pl-[60px] flex  min-h-[48px] items-center ">
                                                            <div className=" font-normal text-[14px] family-robo">
                                                                Use Device Theme
                                                            </div>
                                                        </li>
                                                        <li onClick={setDarkTheme} className=" relative py-[0px] hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer pr-[36px] pl-[60px] flex  min-h-[48px] items-center ">
                                                            {
                                                                (
                                                                    <div className=" hidden dark:block absolute left-3">
                                                                        <svg
                                                                            viewBox="0 0 24 24"
                                                                            width={24}
                                                                            height={24}
                                                                            preserveAspectRatio="xMidYMid meet"
                                                                            focusable="false"
                                                                            className="style-scope yt-icon"
                                                                        >
                                                                            <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                                <path d="M9,18.7l-5.4-5.4l0.7-0.7L9,17.3L20.6,5.6l0.7,0.7L9,18.7z" class="style-scope yt-icon"></path>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                )
                                                            }

                                                            <div className=" font-normal text-[14px] family-robo">
                                                                Dark theme
                                                            </div>
                                                        </li>
                                                        <li onClick={setLightTheme} className=" relative py-[0px] hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer pr-[36px] pl-[60px] flex  min-h-[48px] items-center ">
                                                            {/* {console.log(localStorage.theme)} */}
                                                            {
                                                                (
                                                                    <div className=" dark:hidden absolute left-3">
                                                                        <svg
                                                                            viewBox="0 0 24 24"
                                                                            width={24}
                                                                            height={24}
                                                                            preserveAspectRatio="xMidYMid meet"
                                                                            focusable="false"
                                                                            className="style-scope yt-icon"
                                                                        >
                                                                            <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                                <path d="M9,18.7l-5.4-5.4l0.7-0.7L9,17.3L20.6,5.6l0.7,0.7L9,18.7z" class="style-scope yt-icon"></path>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                )
                                                            }
                                                            <div className=" font-normal text-[14px] family-robo">
                                                                Light theme
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        ) : ''
                                    }
                                    {
                                        showswitchAccount ? (
                                            <div className="custome-shadow-1 bg-white dark:bg-[#282828] dark:text-[#fff] profile-dropdown-style family-robo max-w-[300px] max-h-[350px] w-[300px]">
                                                <div className="border-b dark:border-[rgba(255,255,255,0.1)] cursor-pointer" onClick={() => {
                                                    setapearanceOpen(false)
                                                    setshoeProfile(true)
                                                    setswitchAccount(false)

                                                }}>
                                                    <div className="flex p-[16px] items-center gap-4">
                                                        <svg viewBox="0 0 24 24" width={24} height={24} preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" ><g mirror-in-rtl="" className=" dark:fill-[#909090]" fill="#a9a9a9"><path d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z" class="style-scope yt-icon"></path></g></svg>
                                                        <div className="">Account</div>
                                                    </div>
                                                </div>
                                                <div className="px-[16px]">
                                                    <div className="border-b  dark:border-[rgba(255,255,255,0.1)]  cursor-pointer" >
                                                        <div className=" family-robo text-[12px] text-[#606060] py-[12px] mx-[16px] items-center gap-4">
                                                            <h1 className=" text-[#606060] dark:text-[#fff]">Muhammad Usman</h1>
                                                            <p className=" text-[#606060] dark:text-[#aaaaaa]">muhammad.usmaann@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="  border-b dark:border-[rgba(255,255,255,0.1)]  family-robo">
                                                    <ul className="py-[8px] px-0 ">
                                                        <li className="dark:border-[rgba(255,255,255,0.1)] px-[16px] h-[64px]">
                                                            <div className="flex items-center justify-between">
                                                                <div className=" flex items-center gap-4">
                                                                    <div className=" w-10 h-10 rounded-full bg-slate-300"></div>
                                                                    <div className="">
                                                                        <h1 className="text-[#0d0d0d] family-robo dark:text-[#fff] font-normal text-[14px] leading-2">Muhammad Usman </h1>
                                                                        <p className="text-[#0d0d0d] family-robo dark:text-[#aaa] font-normal text-[12px] leading-2">@MuhammadUsman-pq3yn</p>
                                                                        <p className="text-[#0d0d0d] family-robo dark:text-[#aaa] font-normal text-[12px] leading-2">No Subscribe</p>
                                                                    </div>
                                                                </div>
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    width={24}
                                                                    height={24}
                                                                    preserveAspectRatio="xMidYMid meet"
                                                                    focusable="false"
                                                                    className="style-scope yt-icon"
                                                                >
                                                                    <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                        <path d="M9,18.7l-5.4-5.4l0.7-0.7L9,17.3L20.6,5.6l0.7,0.7L9,18.7z" class="style-scope yt-icon"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </li>
                                                        <li className="dark:border-[rgba(255,255,255,0.1)] px-[16px] h-[64px]">
                                                            <div className="flex items-center justify-between">
                                                                <div className=" flex items-center gap-4">
                                                                    <div className=" w-10 h-10 rounded-full bg-slate-300"></div>
                                                                    <div className="">
                                                                        <h1 className="text-[#0d0d0d] family-robo dark:text-[#fff] font-normal text-[14px] leading-2">Muhammad Usman </h1>
                                                                        <p className="text-[#0d0d0d] family-robo dark:text-[#aaa] font-normal text-[12px] leading-2">@MuhammadUsman-pq3yn</p>
                                                                        <p className="text-[#0d0d0d] family-robo dark:text-[#aaa] font-normal text-[12px] leading-2">No Subscribe</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </li>
                                                        <li className="dark:border-[rgba(255,255,255,0.1)] px-[16px] h-[64px]">
                                                            <div className="flex items-center justify-between">
                                                                <div className=" flex items-center gap-4">
                                                                    <div className=" w-10 h-10 rounded-full bg-slate-300"></div>
                                                                    <div className="">
                                                                        <h1 className="text-[#0d0d0d] family-robo dark:text-[#fff] font-normal text-[14px] leading-2">Muhammad Usman </h1>
                                                                        <p className="text-[#0d0d0d] family-robo dark:text-[#aaa] font-normal text-[12px] leading-2">@MuhammadUsman-pq3yn</p>
                                                                        <p className="text-[#0d0d0d] family-robo dark:text-[#aaa] font-normal text-[12px] leading-2">No Subscribe</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="  border-b dark:border-[rgba(255,255,255,0.1)]  family-robo">
                                                    <ul className="py-[8px] px-0 ">

                                                        <li className=" py-[0px]  hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer pr-[36px] pl-[16px] flex gap-4 min-h-[48px] items-center ">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                preserveAspectRatio="xMidYMid meet"
                                                                focusable="false"
                                                                className="style-scope yt-icon"
                                                            >
                                                                <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                    <path d="M13.72,11.93C15.58,11.59,17,9.96,17,8c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4c0,1.96,1.42,3.59,3.28,3.93 C6.77,12.21,4,15.76,4,20h18C22,15.76,19.23,12.21,13.72,11.93z M10,8c0-1.65,1.35-3,3-3s3,1.35,3,3s-1.35,3-3,3S10,9.65,10,8z M13,12.9c5.33,0,7.56,2.99,7.94,6.1H5.06C5.44,15.89,7.67,12.9,13,12.9z M4,12H2v-1h2V9h1v2h2v1H5v2H4V12z" class="style-scope yt-icon"></path>
                                                                </g>
                                                            </svg>
                                                            <div className=" font-normal text-[14px] family-robo">
                                                                Add Account
                                                            </div>
                                                        </li>
                                                        <li className=" py-[0px]  hover:bg-[#e5e7eb] dark:hover:bg-[#3e3e3e] cursor-pointer pr-[36px] pl-[16px] flex gap-4 min-h-[48px] items-center ">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                preserveAspectRatio="xMidYMid meet"
                                                                focusable="false"
                                                                className="style-scope yt-icon"
                                                            >
                                                                <g className=" dark:fill-[#909090]" fill="#a9a9a9">
                                                                    <path d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z" class="style-scope yt-icon"></path>
                                                                </g>
                                                            </svg>
                                                            <div className=" font-normal text-[14px] family-robo">
                                                                Sign out
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>

                                            </div>
                                        ) : ''
                                    }
                                </>
                            )}
                            trigger={["click"]}
                        >
                            <Tooltip
                                placement="bottomRight"
                                overlayInnerStyle={{
                                    backgroundColor: "#6c6c6c",
                                    fontSize: "10px",
                                    padding: "10px",
                                    marginTop: "8px",
                                    fontWeight: "500",
                                }}
                                title={"Account"}
                                arrow={false}
                            >
                                <div className=" w-full h-full rounded-full bg-slate-300"></div>
                            </Tooltip>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
