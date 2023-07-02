"use client"

import { useActiveTab, useWindowDimensions } from "@/utils/functions/customHooks";
import DiscussionForum from "./DiscussionForum";
import MarketStories from "./MarketStories";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const ContentBox = () => {
    const { width } = useWindowDimensions();
    const { activeTab } = useActiveTab();
    const [actualWidth, setActualWidth] = useState(null);
    const [actualActiveTab, setActualActiveTab] = useState(null);
    const breakpoint = 640;

    useEffect(() => {
        setActualWidth(width);
        setActualActiveTab(activeTab);
    }, [width, activeTab])

    if (actualWidth) {
        if (actualWidth <= breakpoint) {
            if (actualActiveTab === 1) {
                return <DiscussionForum />
            }
            else {
                return <MarketStories />
            }
        }
        else {
            return <>
                <DiscussionForum />
                <MarketStories />
            </>
        }
    }
    else {
        return <div className="my-0 mx-auto p-2.5">
            <div className="text-4xl">Loading...</div>
            <FontAwesomeIcon icon={faCircleNotch} className="animate-spin-slow h-20 w-20 text-blue-300 my-0 mx-auto p-2.5" />
        </div>
    }
}

export default ContentBox;
