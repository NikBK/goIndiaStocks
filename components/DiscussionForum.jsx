import PostBox from "./PostBox";
import FilterBar from "./FilterBar";

const DiscussionForum = () => {
    return (
        <div className={`flex flex-col bg-slate-50 lg:min-w-fit`}>
            <div className='flex flex-col py-1.5 px-5 '>
                <h3 className='font-bold text-slate-900'>Filters</h3>
                <FilterBar />
                <PostBox />
            </div>
        </div>
    )
}

export default DiscussionForum;
