"use client"

import { DashboardHeader } from "@/components/shared/Header"
import { DashboardSidebar } from "@/components/sidebar/page-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { StatsCards } from "./dashboard-cards"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import TableTabs from "@/components/table/table-tabs"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-gray-100">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col flex-1 overflow-hidden">
          <DashboardHeader />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="mx-auto px-6 py-8">
              <h1 className="text-3xl font-semibold text-gray-800 my-6">Dashboard</h1>
              <ScrollArea className="w-full whitespace-nowrap rounded-lg pb-2">
                <StatsCards />
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
              <div className="mt-5">
                <TableTabs />
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

