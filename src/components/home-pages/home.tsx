import React from 'react'
import SectionsFirst from './section-first'
import CategoriesPages from './categories/page'
import ProductsPages from './products/page'

type Props = {}

function HomePages({ }: Props) {
    return (
        <div className='space-y-8'>
            <SectionsFirst />
            <CategoriesPages />
            <ProductsPages />
        </div>
    )
}

export default HomePages