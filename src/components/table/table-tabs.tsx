"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils"
import { TransactionsTable } from "./transactions-table"
import { AnalyticsTableData } from "./analytics-table"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

const tabItems = [
    { value: "all", label: "All Transactions" },
    { value: "today", label: "Today" },
    { value: "calendar", label: "Calendar" },
    { value: "analytics", label: "Analytics" },
]

const AllTransactions = () => <TransactionsTable />
const Analytics = () => <AnalyticsTableData />
const Today = () => <TransactionsTable />



function TableTabs() {
    const [activeTab, setActiveTab] = React.useState("all");
    const [dateRange, setDateRange] = React.useState<any>(null);
    const [dateHidden, setDateHidden] = React.useState<boolean>(true);

    const handleDateChange = (newDate: any) => {
        setDateRange(newDate);
        if (newDate?.from && newDate?.to) {
            setTimeout(() => {
                setDateHidden(false);
            }, 400);
        }
    };


    const CalendarCom = () => <div className="relative">
        {dateHidden && <div className="absolute top-0 p-4 left-[15%] rounded-lg bg-white z-50 shadow-2xl">
            <Calendar
                mode="range"
                onSelect={handleDateChange}
                selected={dateRange}
                initialFocus
            />
        </div>}
        <TransactionsTable />
    </div>
    return (
        <Tabs value={activeTab} onValueChange={(value) => {
            setActiveTab(value)
            setDateHidden(true)
            setDateRange(null)
        }} className="w-full">
            <TabsList className="h-auto p-0  bg-transparent">
                {tabItems.map((item) => (
                    <TabsTrigger
                        key={item.value}
                        value={item.value}
                        onClick={() => setDateHidden(true)}
                        className={cn(
                            "h-9 px-6 ml-5 text-base font-normal transition-all",
                            "text-blue-600/70 hover:text-blue-600",
                            "data-[state=active]:text-red-500 rounded-lg data-[state=active]:shadow-none font-bold data-[state=active]:border-b-[3px] data-[state=active]:border-red-500",
                            "rounded-none shadow-none focus:ring-0 focus:ring-offset-0",
                            "radix-state-active:border-none radix-state-active:border-red-500"
                        )}
                    >
                        {item.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value="all" className="mt-0">
                <AllTransactions />
            </TabsContent>
            <TabsContent value="today" className="mt-0">
                <Today />
            </TabsContent>
            <TabsContent value="calendar" className="mt-0">
                <CalendarCom />
            </TabsContent>
            <TabsContent value="analytics" className="mt-0">
                <Analytics />
            </TabsContent>

            <Pagination className="justify-start flex my-4">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </Tabs>
    )
}

export default TableTabs