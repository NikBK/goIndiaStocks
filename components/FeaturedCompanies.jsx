import { featuredCompaniesList } from "@/utils/store/featuredCompaniesList";
import FeaturedCompany from "./FeaturedCompany";

const FeaturedCompanies = () => {
    return (
        <>
            <h2 className="max-sm:hidden text-orange-600 font-semibold tracking-widest text-xl px-2.5 mx-2.5 my-1.5">FEATURED COMPANIES</h2>
            <ul className="flex items-center bg-emerald-50 p-2.5 overflow-x-scroll hidden_scroll_bar">
                {featuredCompaniesList.map((company, index) => (
                    <FeaturedCompany company={company} key={`${company.name}_${index}`} />
                ))}
            </ul>
        </>
    )
}

export default FeaturedCompanies;
