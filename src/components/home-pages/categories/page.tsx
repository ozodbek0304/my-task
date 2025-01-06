import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {}

function CategoriesPages({ }: Props) {
    return (
        <Card className='container bg-transparent p-0  rounded-none shadow-none'>
            <CardContent>
                <CardHeader className='mt-5 text-center '>
                    <CardTitle className='md:text-[30px]' >Kategoriya bo'yicha ko'rib chiqing</CardTitle>
                </CardHeader>
                {
                    Array(12).fill(0).map((_, index) => (
                        <div>
                        </div>
                    ))
                }
            </CardContent>
        </Card>
    )
}

export default CategoriesPages