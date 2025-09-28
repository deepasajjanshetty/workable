export default function FinancialDashboardSimple() {
    return (
        <div className="w-full h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Financial Dashboard
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Portfolio</h3>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">$125,430.50</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Today's P&L</h3>
                        <p className="text-2xl font-bold text-green-600">+$2,340.25</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Cash Balance</h3>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">$15,230.80</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Risk Score</h3>
                        <p className="text-2xl font-bold text-orange-600">Moderate</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Portfolio Overview</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Apple Inc. (AAPL)</span>
                                <span className="font-semibold text-gray-900 dark:text-white">$45,230.50</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Microsoft Corp. (MSFT)</span>
                                <span className="font-semibold text-gray-900 dark:text-white">$32,150.75</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Tesla Inc. (TSLA)</span>
                                <span className="font-semibold text-gray-900 dark:text-white">$28,450.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Transactions</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Bought 10 shares of AAPL</span>
                                <span className="font-semibold text-green-600">+$1,500.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Sold 5 shares of TSLA</span>
                                <span className="font-semibold text-red-600">-$2,200.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Bank transfer deposit</span>
                                <span className="font-semibold text-green-600">+$5,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
