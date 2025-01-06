import React from 'react'
import SectionsFirst from './section-first'
import CategoriesPages from './categories/page'

type Props = {}

function HomePages({ }: Props) {
    return (
        <>
            <SectionsFirst />
            <CategoriesPages />
        </>
    )
}

export default HomePages