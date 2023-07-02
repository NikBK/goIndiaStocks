import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";
import SideBarMenu from "@/components/SideBarMenu";

export default function Home() {

  return (
    <main className="flex">
      <SideBarMenu />
      <DiscussionForum />
      <MarketStories />
    </main>
  )
}