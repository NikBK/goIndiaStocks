"use client"

import { faCommentDots, faRectangleList } from "@fortawesome/free-regular-svg-icons";
import { faBorderNone, faDisplay, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const mobileIcons = [faBorderNone, faQrcode, faDisplay, faCommentDots, faRectangleList];

const Footer = () => {
    const [active, setActive] = useState(2);

    return (
        <>
            {mobileIcons.map((icon, index) => (
                <button
                    onClick={() => setActive(index)}
                    className={`${active === index ? "text-slate-200 border-red-600" : "text-slate-400 border-transparent"} py-2 px-2.5 cursor-pointer hover:text-slate-300 border-b-2 border-solid`}
                    key={`icon_${index}`}
                >
                    <FontAwesomeIcon icon={icon} className="w-full h-6" />
                </button>
            ))}
        </>
    )
}


export default Footer;
