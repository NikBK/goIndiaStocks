import { marketStoriesList } from "@/utils/store/marketStoriesList";
import Image from "next/image";

const MarketStories = () => {
    return (
        <div className="flex flex-col h-over-screen overflow-x-scroll bg-slate-50 market_bar">
            <h2 className="text-orange-600 font-semibold text-xl pl-5">MARKET STORIES</h2>
            <div className="flex flex-wrap justify-evenly">
                {marketStoriesList.map((story, index) => (
                    <Story story={story} key={`${story.name}_${index}`} />
                ))}
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
