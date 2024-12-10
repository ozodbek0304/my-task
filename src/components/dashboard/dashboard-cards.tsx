"use client"

import { ArrowDown, ArrowUp, Users, Crown, Package, Diamond } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"


const stats = [
  {
    title: "Total User",
    value: "40,689",
    change: "8.5%",
    timeframe: "Up from yesterday",
    trend: "up",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Premium Users",
    value: "3000",
    change: "4.3%",
    timeframe: "Down from yesterday",
    trend: "down",
    icon: Crown,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "Standard Users",
    value: "10293",
    change: "1.3%",
    timeframe: "Up from past week",
    trend: "up",
    icon: Package,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    title: "Premium 3",
    value: "2040",
    change: "1.8%",
    timeframe: "Up from yesterday",
    trend: "up",
    icon: Diamond,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    title: "Premium 6",
    value: "3000",
    change: "4.3%",
    timeframe: "Down from yesterday",
    trend: "down",
    icon: Diamond,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    title: "Total 12",
    value: "7890",
    change: "8.5%",
    timeframe: "Up from yesterday",
    trend: "up",
    icon: Diamond,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
]

export function StatsCards() {
  return (
    <div className="flex w-max space-x-4 my-2">
      {stats.map((stat) => (
        <Card key={stat.title} className="shrink-0 h-[160px] w-[270px]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <div className={`rounded-full p-2.5 ${stat.iconBg}`}>
                <stat.icon className={`h-7 w-7 ${stat.iconColor}`} />
              </div>
            </div>
            <div className="mt-2">
              <p className="text-2xl font-bold">{stat.value}</p>
              <div className="mt-1 flex items-center text-xs">
                {stat.trend === "up" ? (
                  <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                )}
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span className="ml-1 text-muted-foreground">
                  {stat.timeframe}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  

  )
}

