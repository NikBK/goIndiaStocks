import ContentBox from "@/components/ContentBox";
import Heading from "@/components/Heading";
import SideBarMenu from "@/components/SideBarMenu";
import { Context } from "@/utils/functions/customHooks";

export default function Home() {

  return (
    <Context>
      <main className="overflow-x-hidden">
        <Heading />
        <div className="flex">
          <SideBarMenu />
          <ContentBox />
        </div>
      </main>
    </Context>
  )
}