'use client'

import CategoryProducts from "@/components/home-pages/categories/category-products"
import CategorySidebar from "@/components/home-pages/categories/category-sidebar"
import PageContainer from "@/components/layouts/layout"
import { Home } from "lucide-react"
import Link from "next/link"


export default function ReferatlarPage() {


    return (
        <PageContainer>
            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-4 py-6">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-foreground">
                            <Home className="w-4 h-4" />
                        </Link>
                        <span>/</span>
                        <span>Referatlar</span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <CategorySidebar />

                        {/* Main Content */}
                        <CategoryProducts />
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

