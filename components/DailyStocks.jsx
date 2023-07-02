import { dailyStocks } from "@/utils/store/dailyStockData";
import Stock from "./Stock";

const DailyStocks = () => {
    return (
        <ul className="flex space-evenly text-white bg-black overflow-x-scroll mt-16 stocks_bar">
            {dailyStocks.map((stock, id) => (
                <Stock stock={stock} key={`${stock.name}_${id}`} />
            ))}
        </ul>
    )
}

export default DailyStocks;
