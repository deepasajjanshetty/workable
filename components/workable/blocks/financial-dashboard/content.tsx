import { TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3, Wallet } from "lucide-react";
import PortfolioOverview from "./portfolio-overview";
import TransactionHistory from "./transaction-history";
import MarketSummary from "./market-summary";
// Financial dashboard content component

export default function Content() {
    return (
        <div className="space-y-6">
            {/* Financial Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Portfolio</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">$125,430.50</p>
                        </div>
                        <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600 dark:text-green-400">+12.5%</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">from last month</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Today's P&L</p>
                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">+$2,340.25</p>
                        </div>
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                            <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600 dark:text-green-400">+3.2%</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">today</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Cash Balance</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">$15,230.80</p>
                        </div>
                        <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                            <Wallet className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Available for trading</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Risk Score</p>
                            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">Moderate</p>
                        </div>
                        <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                            <BarChart3 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Balanced portfolio</span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Portfolio Overview */}
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <PieChart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                Portfolio Overview
                            </h2>
                            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                                View Details
                            </button>
                        </div>
                        <PortfolioOverview />
                    </div>
                </div>

                {/* Market Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            Market Summary
                        </h2>
                        <MarketSummary />
                    </div>
                </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Wallet className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        Recent Transactions
                    </h2>
                    <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                        View All
                    </button>
                </div>
                <TransactionHistory />
            </div>
        </div>
    );
}
