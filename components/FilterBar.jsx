import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const filters = [
    { name: "Sector 1", bgColor: "bg-red-600" },
    { name: "Sector 2", bgColor: "bg-blue-600" },
    { name: "Sector 3", bgColor: "bg-green-500" }
]

const FilterBar = () => {
    return (
        <ul className="flex justify-between items-center py-2.5 px-1.5 mb-2 bg-white shadow-margin-down rounded-md">
            <div className="flex overflow-x-scroll filters_bar">
                {filters.map((filter, index) => (
                    <li className={`${filter.bgColor} flex items-center h-fit min-w-fit rounded-full py-1.5 px-3 mx-1.5 text-sm text-slate-100 cursor-pointer`} key={`${filter.name}_${index}`}>
                        {filter.name}
                    </li>
                ))}
            </div>
            <li>
                <button className="flex items-center px-1.5 h-10 border-solid border-2 border-slate-300 bg-neutral-200 rounded-full">
                    <FontAwesomeIcon icon={faSearch} className="w-4 h-6 inline-block" />
                    <input
                        type="text"
                        className="text-sm text-slate-500 p-2 w-24 outline-none leading-tight bg-neutral-200"
                        placeholder="Search here"
                    />
                </button>
            </li>
        </ul>
    )
}

export default FilterBar;