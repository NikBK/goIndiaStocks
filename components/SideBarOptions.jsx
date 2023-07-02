import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SideBarOptions = ({ option }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div className="flex items-center cursor-pointer" onClick={() => setCollapsed(prev => !prev)}>
                <FontAwesomeIcon icon={option.icon} className="p-2" />
                <span>{option.type}</span>
                <FontAwesomeIcon icon={collapsed ? faSortUp : faSortDown} className="p-2" />
            </div>
            <div className={`collapsible_block ${collapsed ? "collapse" : ""}`}>
                {option.category.map((cat, ind) => (
                    <div className="pl-10 my-1.5 cursor-pointer" key={`${cat.type}_${ind}`}>{cat}</div>
                ))}
            </div>
        </>
    )
}

export default SideBarOptions
