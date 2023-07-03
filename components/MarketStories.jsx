import { marketStoriesList } from "@/utils/store/marketStoriesList";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const MarketStories = () => {
    return (
        <div className="flex flex-col sm:h-over-screen sm:overflow-x-scroll bg-slate-50 hidden_scroll_bar">
            <div className="flex flex-wrap justify-evenly">
                {marketStoriesList.map((story, index) => (
                    <Story story={story} key={`${story.name}_${index}`} />
                ))}
            </div>
            <div className="fixed bottom-10 right-8 w-9 sm:h-9 h6 max-sm:w-6 bg-[#1d3b61] rounded-[50%] p-2.5 m-2 box-content cursor-pointer">
                <FontAwesomeIcon icon={faPlus} className="w-6 h-6 mx-auto flex rounded-[50%] text-white h-full w-full" />
            </div>
        </div>
    )
}

const Story = ({ story }) => {
    return (
        <div className="flex flex-col w-64 h-40 m-2.5 relative">
            <Image src={story.url} alt="story-img" width={150} height={200} className="w-full h-full rounded-xl" />
            <article className="text-sm absolute bottom-0 left-0 px-1.5 pb-1.5 rounded-b-xl bg-black/50 text-white">{story.desc}</article>
        </div>
    )
}

export default MarketStories;
