import Head from 'next/head';
import React from 'react'
import Header from '../header';

type Props = {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    title?: string;
}

const PageContainer: React.FC<Props> = (
    {
        header = <Header />,
        footer = <p>Footer</p>,
        children,
        title

    }: Props) => {
    return (
        <div>
            <Head>
                <title>Barcha elektron documentlar bazasi </title>
                <meta property="og:title" content={title} />
            </Head>
            {header}
            {children}
            {footer}
        </div>
    )
}

export default PageContainer