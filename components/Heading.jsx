"use client"

import { useActiveTab } from "@/utils/functions/customHooks";

const Heading = () => {
    const { activeTab, setActiveTab } = useActiveTab();

    return (
        <div className="flex justify-around max-sm:bg-[#31527d] max-sm:text-center">
            <h2 onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? "max-sm:bg-[#1d3b61] max-sm:border-b-red-400" : ""} max-sm:w-full max-sm:border-b-4 text-orange-600 font-semibold text-xl pl-5 max-sm:text-white sm:uppercase max-sm:cursor-pointer`}>Disscussion Fourm</h2>
            <h2 onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? "max-sm:bg-[#1d3b61] max-sm:border-b-red-400" : ""} max-sm:w-full max-sm:border-b-4 text-orange-600 font-semibold text-xl pl-5 max-sm:text-white sm:uppercase max-sm:cursor-pointer`}>Market Stories</h2>
        </div>
    )
}

export default Heading;

