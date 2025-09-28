import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownLeft, CreditCard, Wallet, TrendingUp, TrendingDown } from "lucide-react";

interface Transaction {
    id: string;
    type: "buy" | "sell" | "deposit" | "withdrawal";
    symbol?: string;
    description: string;
    amount: string;
    date: string;
    status: "completed" | "pending" | "failed";
}

interface TransactionHistoryProps {
    className?: string;
}

const TRANSACTIONS: Transaction[] = [
    {
        id: "1",
        type: "buy",
        symbol: "AAPL",
        description: "Bought 10 shares of Apple Inc.",
        amount: "+$1,500.00",
        date: "2 hours ago",
        status: "completed",
    },
    {
        id: "2",
        type: "sell",
        symbol: "TSLA",
        description: "Sold 5 shares of Tesla Inc.",
        amount: "-$2,200.00",
        date: "1 day ago",
        status: "completed",
    },
    {
        id: "3",
        type: "deposit",
        description: "Bank transfer deposit",
        amount: "+$5,000.00",
        date: "2 days ago",
        status: "completed",
    },
    {
        id: "4",
        type: "buy",
        symbol: "MSFT",
        description: "Bought 15 shares of Microsoft Corp.",
        amount: "+$3,750.00",
        date: "3 days ago",
        status: "completed",
    },
    {
        id: "5",
        type: "withdrawal",
        description: "Cash withdrawal",
        amount: "-$500.00",
        date: "1 week ago",
        status: "completed",
    },
];

export default function TransactionHistory({ className }: TransactionHistoryProps) {
    function getTransactionIcon(type: string) {
        switch (type) {
            case "buy":
                return <ArrowUpRight className="h-4 w-4 text-green-500" />;
            case "sell":
                return <ArrowDownLeft className="h-4 w-4 text-red-500" />;
            case "deposit":
                return <Wallet className="h-4 w-4 text-blue-500" />;
            case "withdrawal":
                return <CreditCard className="h-4 w-4 text-orange-500" />;
            default:
                return <Wallet className="h-4 w-4 text-gray-500" />;
        }
    }

    function getStatusColor(status: string) {
        switch (status) {
            case "completed":
                return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
            case "pending":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
            case "failed":
                return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
        }
    }

    return (
        <div className={cn("space-y-3", className)}>
            {TRANSACTIONS.map((transaction) => (
                <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#1F1F23] rounded-lg hover:bg-gray-100 dark:hover:bg-[#2A2A2A] transition-colors"
                >
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white dark:bg-[#0F0F12] rounded-lg">
                            {getTransactionIcon(transaction.type)}
                        </div>
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                                {transaction.description}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {transaction.date}
                                </span>
                                <span
                                    className={cn(
                                        "text-xs px-2 py-1 rounded-full font-medium",
                                        getStatusColor(transaction.status)
                                    )}
                                >
                                    {transaction.status}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p
                            className={cn(
                                "font-semibold",
                                transaction.amount.startsWith("+")
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-red-600 dark:text-red-400"
                            )}
                        >
                            {transaction.amount}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
