"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCaretLeft, faCaretRight, faCommentDollar, faCommentDots, faUser } from "@fortawesome/free-solid-svg-icons";
import SideBarOptions from "./SideBarOptions";
import { useState } from "react";

const sidebarOptions = [
    { type: "Disscussion Fourm", icon: faCommentDots, category: [] },
    { type: "Market Stories", icon: faCommentDollar, category: ["Sentiment", "Market", "Sector", "Watchlist", "Events", "News/Interview"] }
];

const SideBarMenu = () => {
    const [sideBarExpanded, setSideBarExpanded] = useState(false);

    const handleSideBarExpansion = () => {
        setSideBarExpanded(prev => !prev);
    }

    return (
        <div className={`${sideBarExpanded ? "fixed -left-[12rem]" : "relative"} min-w-[12rem] top-1/2 flex flex-col bg-[#1d3b61] text-white text-sm max-sm:fixed max-sm:z-10 max-sm:top-1/4 max-sm:h-screen max-sm:top-[12%]`}>
            <div className="px-2.5 py-1.5 flex items-center h-fit border-b">
                <FontAwesomeIcon icon={faUser} className="p-1.5" />
                <span className="p-1.5">Hello, User</span>
                <FontAwesomeIcon icon={faBell} className="p-1.5 grow" />
            </div>
            {sidebarOptions.map((option, index) => (
                <SideBarOptions option={option} key={`${option.type}_${index}`} />
            ))}
            <div onClick={handleSideBarExpansion} className="absolute w-3 h-12 -right-3 max-sm:top-[35%] sm:top-[20%] top-[15%] flex items-center justify-center bg-[#1d3b61] cursor-pointer">
                <FontAwesomeIcon icon={sideBarExpanded ? faCaretRight : faCaretLeft} className="" />
            </div>
        </div>
    )
}

export default SideBarMenu;
