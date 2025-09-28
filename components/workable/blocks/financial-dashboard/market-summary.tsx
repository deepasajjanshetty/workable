import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

interface MarketItem {
    id: string;
    name: string;
    symbol: string;
    price: string;
    change: string;
    changePercent: string;
    isPositive: boolean;
}

interface MarketSummaryProps {
    className?: string;
}

const MARKET_ITEMS: MarketItem[] = [
    {
        id: "1",
        name: "S&P 500",
        symbol: "SPX",
        price: "4,567.89",
        change: "+23.45",
        changePercent: "+0.52%",
        isPositive: true,
    },
    {
        id: "2",
        name: "Dow Jones",
        symbol: "DJI",
        price: "34,567.89",
        change: "-123.45",
        changePercent: "-0.36%",
        isPositive: false,
    },
    {
        id: "3",
        name: "NASDAQ",
        symbol: "IXIC",
        price: "14,234.56",
        change: "+45.67",
        changePercent: "+0.32%",
        isPositive: true,
    },
    {
        id: "4",
        name: "Bitcoin",
        symbol: "BTC",
        price: "$43,250.00",
        change: "+$1,250.00",
        changePercent: "+2.98%",
        isPositive: true,
    },
    {
        id: "5",
        name: "Ethereum",
        symbol: "ETH",
        price: "$2,650.75",
        change: "-$45.25",
        changePercent: "-1.68%",
        isPositive: false,
    },
];

export default function MarketSummary({ className }: MarketSummaryProps) {
    return (
        <div className={cn("space-y-4", className)}>
            {/* Market Chart Placeholder */}
            <div className="h-32 bg-gray-50 dark:bg-[#1F1F23] rounded-lg flex items-center justify-center">
                <div className="text-center">
                    <BarChart3 className="h-8 w-8 text-gray-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">Market Chart</p>
                </div>
            </div>

            {/* Market Data */}
            <div className="space-y-3">
                {MARKET_ITEMS.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#1F1F23] rounded-lg"
                    >
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">
                                {item.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {item.symbol}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">
                                {item.price}
                            </p>
                            <div className="flex items-center space-x-1">
                                {item.isPositive ? (
                                    <TrendingUp className="h-3 w-3 text-green-500" />
                                ) : (
                                    <TrendingDown className="h-3 w-3 text-red-500" />
                                )}
                                <span
                                    className={cn(
                                        "text-xs font-medium",
                                        item.isPositive
                                            ? "text-green-600 dark:text-green-400"
                                            : "text-red-600 dark:text-red-400"
                                    )}
                                >
                                    {item.changePercent}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Market Status */}
            <div className="pt-3 border-t border-gray-200 dark:border-[#1F1F23]">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Market Status</span>
                    <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                            Open
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
