'use client'

import { ArrowRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Category {
  title: string
  count: number
  link: string
}

const categories: Category[] = [
  { title: "Referatlar", count: 625, link: "#" },
  { title: "Kurs ishlar", count: 198, link: "#" },
  { title: "Diplom ishlar", count: 6, link: "#" },
  { title: "Biznes rejalar", count: 23, link: "#" },
  { title: "Taqdimotlar", count: 220, link: "#" },
  { title: "Statistika", count: 142, link: "#" },
  { title: "Blanklar", count: 1, link: "#" },
  { title: "Testlar To'plami", count: 57, link: "#" },
  { title: "Namunaviy hujjatlar", count: 19, link: "#" },
  { title: "Dars ishlanmalari", count: 180, link: "#" },
  { title: "Mustaqil ishlar", count: 728, link: "#" },
  { title: "Boshqalar", count: 13, link: "#" },
]

export default function CategoryGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Kategoriya bo'yicha ko'rib chiqing</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Card key={category.title} className="group p-0 bg-gray-100 transition-all duration-300 shadow hover:shadow-lg dark:hover:shadow-primary/5">
            <div className="p-6">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
                <p className="text-sm text-muted-foreground ">{category.count} fayllar</p>
              </div>
              <Button
                variant="link"
                className="mt-3 p-0 h-auto  text-primary group-hover:underline"
                asChild
              >
                <a href={"/kurs-ishi"} className="flex items-center gap-1">
                  Batafsil
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

