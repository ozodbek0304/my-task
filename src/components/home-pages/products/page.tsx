'use client'

import { useState } from 'react'
import { Heart, FileText, Eye, Download, Calendar } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Item {
    id: number
    title: string
    date: string
    views: number
    downloads: number
    price: number
}

const items: Item[] = [
    {
        id: 1,
        title: "KORXONA FAOLIYATINI STRATEGIK BOSHQARISH VA REJALASHTIRISHNIN",
        date: "6 Января, 2025",
        views: 0,
        downloads: 0,
        price: 35000
    },
    {
        id: 2,
        title: "INNOVATSION TEXNOLOGIYALAR ASOSIDA IQTISODIY FANLARNI",
        date: "5 Января, 2025",
        views: 6,
        downloads: 0,
        price: 25000
    },
    {
        id: 3,
        title: "INFLYATSIYA MOHIYATI VA UNI BARTARAF ETISH IMKONIYATLARI",
        date: "5 Января, 2025",
        views: 5,
        downloads: 0,
        price: 25000
    },
    {
        id: 4,
        title: "IJTIMOIY PEDAGOGIKANING TAMOYILLARI",
        date: "5 Января, 2025",
        views: 5,
        downloads: 0,
        price: 25000
    },
    {
        id: 5,
        title: "IJTIMOIY PEDAGOGIKANING KATEGORIYALARI VA MEXANIZMLARI",
        date: "5 Января, 2025",
        views: 5,
        downloads: 0,
        price: 25000
    },
    {
        id: 6,
        title: "IJTIMOIYLASHUV OMILLARI VA VOSITALARI",
        date: "5 Января, 2025",
        views: 5,
        downloads: 0,
        price: 25000
    }
]

export default function RecentItems() {
    const [favorites, setFavorites] = useState<number[]>([])

    const toggleFavorite = (id: number) => {
        setFavorites(prev =>
            prev.includes(id)
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                So'nggi qo'shilganlar
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        className="group relative overflow-hidden p-0 cursor-pointer transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10  rounded-xl"
                    >
                        <div className="absolute right-3 top-3 z-10">
                            <button
                                onClick={() => toggleFavorite(item.id)}
                                className="rounded-full transition-colors"
                            >
                                <Heart
                                    className={cn(
                                        "w-5 h-5 transition-all duration-300",
                                        favorites.includes(item.id)
                                            ? "fill-red-500 stroke-red-500 scale-110"
                                            : "text-muted-foreground"
                                    )}
                                />
                            </button>
                        </div>

                        <div className="p-6 flex flex-col h-full">
                            <div className="flex gap-4 mb-4 items-start">
                                <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl">
                                    <FileText className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium line-clamp-2 mb-2 text-sm lowercase">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            <span>{item.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Eye className="w-4 h-4" />
                                            <span>{item.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Download className="w-4 h-4" />
                                            <span>{item.downloads}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-4 border-t flex items-center justify-between">
                                <div className="font-semibold text-lg tabular-nums">
                                    {item.price.toLocaleString()} so'm
                                </div>
                                <Button
                                    className="bg-primary/90 hover:bg-primary transition-colors"
                                >
                                    Купить
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

