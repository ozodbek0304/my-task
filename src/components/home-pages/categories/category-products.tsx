import { useState } from 'react'
import { Heart, LayoutGrid, LayoutList, Eye, Download, Calendar, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select2"
import { cn } from "@/lib/utils"



interface Document {
    id: string
    title: string
    date: string
    views: number
    downloads: number
    price: number
}



const documents: Document[] = [
    {
        id: "1",
        title: "Jahon xo'jaligi va uning evolyutsiyasi.(12-bet-word)",
        date: "15 Ноября, 2024",
        views: 33,
        downloads: 0,
        price: 5000
    },
    {
        id: "2",
        title: "O'ZBEKISTON NARX SIYOSATI VA UNING O'ZBEKISTONDA AMALGA OSHIRILISH XUSUSIYATLARI (11-bet)",
        date: "22 Ноября, 2024",
        views: 46,
        downloads: 0,
        price: 5000
    },
    {
        id: "3",
        title: "(12-bet) IQTISODIY O'SISH VA MILLIY BOYLIK",
        date: "15 Ноября, 2024",
        views: 18,
        downloads: 0,
        price: 5000
    },
    {
        id: "4",
        title: "(17 bet) AMIR TEMUR VA TEMURIYLAR DAVRIDAGI IQTISODIY G'OYALAR VA IQTISODIY SIYOSAT",
        date: "20 Ноября, 2024",
        views: 54,
        downloads: 0,
        price: 4900
    },
]


function CategoryProducts() {
    const [isGridView, setIsGridView] = useState(true)
    const [favorites, setFavorites] = useState<string[]>([])


    const toggleFavorite = (id: string) => {
        setFavorites(prev =>
            prev.includes(id)
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        )
    }


    return (
        <div className="flex-1">
            <div className="flex items-center justify-between mb-6 bg-slate-100 p-2 px-3 rounded-xl">
                <h1 className="text-2xl font-bold">Referatlar</h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-md bg-white">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "rounded-none",
                                !isGridView && "bg-primary rounded-lg text-white"
                            )}
                            onClick={() => setIsGridView(false)}
                        >
                            <LayoutList className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "rounded-none",
                                isGridView && "bg-primary rounded-lg text-white"
                            )}
                            onClick={() => setIsGridView(true)}
                        >
                            <LayoutGrid className="w-4 h-4" />
                        </Button>
                    </div>
                    <Select defaultValue="default">
                        <SelectTrigger className="w-[180px] bg-white">
                            <SelectValue placeholder="По умолчанию" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="default">По умолчанию</SelectItem>
                            <SelectItem value="price-asc">Narx: Arzondan qimmatga</SelectItem>
                            <SelectItem value="price-desc">Narx: Qimmatdan arzonga</SelectItem>
                            <SelectItem value="date-desc">Sana: Yangidan eskiga</SelectItem>
                            <SelectItem value="date-asc">Sana: Eskidan yangiga</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className={cn(
                "grid gap-4",
                isGridView ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
            )}>
                {documents.map((doc) => (
                    <Card
                        key={doc.id}
                        className={cn(
                            "group relative overflow-hidden p-0 cursor-pointer transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10  rounded-xl",
                            !isGridView && "flex items-center"
                        )}
                    >
                        <div className="absolute right-3 top-3 z-10">
                            <button
                                onClick={() => toggleFavorite(doc.id)}
                                className="rounded-full transition-colors"
                            >
                                <Heart
                                    className={cn(
                                        "w-5 h-5 transition-all duration-300",
                                        favorites.includes(doc.id)
                                            ? "fill-red-500 stroke-red-500 scale-110"
                                            : "text-muted-foreground"
                                    )}
                                />
                            </button>
                        </div>
                        <div className={cn(
                            "p-6",
                            !isGridView && "flex items-center gap-4 flex-1 pr-10"
                        )}>
                            <div className={cn(
                                "flex gap-4",
                                !isGridView && "flex-1"
                            )}>
                                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg h-fit">
                                    <FileText className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium leading-tight mb-2 line-clamp-2 lowercase">
                                        {doc.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            <span>{doc.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Eye className="w-4 h-4" />
                                            <span>{doc.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Download className="w-4 h-4" />
                                            <span>{doc.downloads}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cn(
                                "mt-4 pt-4 border-t flex items-center justify-between",
                                !isGridView && "mt-0 pt-0 border-0 gap-4"
                            )}>
                                <div className="font-semibold tabular-nums">
                                    {doc.price.toLocaleString()} so'm
                                </div>
                                <Button className={"bg-primary"}>Купить</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CategoryProducts