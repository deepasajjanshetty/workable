import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, PieChart } from "lucide-react";

interface PortfolioItem {
    id: string;
    name: string;
    symbol: string;
    value: string;
    change: string;
    changePercent: string;
    isPositive: boolean;
    allocation: number;
    color: string;
}

interface PortfolioOverviewProps {
    className?: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        id: "1",
        name: "Apple Inc.",
        symbol: "AAPL",
        value: "$45,230.50",
        change: "+$2,340.25",
        changePercent: "+5.5%",
        isPositive: true,
        allocation: 35,
        color: "bg-blue-500",
    },
    {
        id: "2",
        name: "Microsoft Corp.",
        symbol: "MSFT",
        value: "$32,150.75",
        change: "+$1,230.50",
        changePercent: "+4.0%",
        isPositive: true,
        allocation: 25,
        color: "bg-green-500",
    },
    {
        id: "3",
        name: "Tesla Inc.",
        symbol: "TSLA",
        value: "$28,450.00",
        change: "-$850.25",
        changePercent: "-2.9%",
        isPositive: false,
        allocation: 22,
        color: "bg-red-500",
    },
    {
        id: "4",
        name: "Google LLC",
        symbol: "GOOGL",
        value: "$19,600.25",
        change: "+$450.75",
        changePercent: "+2.4%",
        isPositive: true,
        allocation: 18,
        color: "bg-purple-500",
    },
];

export default function PortfolioOverview({ className }: PortfolioOverviewProps) {
    return (
        <div className={cn("space-y-4", className)}>
            {/* Portfolio Chart Placeholder */}
            <div className="h-48 bg-gray-50 dark:bg-[#1F1F23] rounded-lg flex items-center justify-center">
                <div className="text-center">
                    <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">Portfolio Chart</p>
                </div>
            </div>

            {/* Holdings List */}
            <div className="space-y-3">
                {PORTFOLIO_ITEMS.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#1F1F23] rounded-lg"
                    >
                        <div className="flex items-center space-x-3">
                            <div className={cn("w-3 h-3 rounded-full", item.color)} />
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.symbol}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-gray-900 dark:text-white">{item.value}</p>
                            <div className="flex items-center space-x-2">
                                {item.isPositive ? (
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                ) : (
                                    <TrendingDown className="h-4 w-4 text-red-500" />
                                )}
                                <span
                                    className={cn(
                                        "text-sm font-medium",
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
        </div>
    );
}
