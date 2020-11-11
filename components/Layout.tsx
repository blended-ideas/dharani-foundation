import React, {ReactNode} from 'react'
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';

type Props = {
    children: ReactNode
    title?: string
    description?: string
}

const Layout = ({
                    children,
                    title = 'Dharani Foundation | Belgaum',
                    description = 'Dharani Foundation is a Non-Profit organisation, formally registered in 2019, which focuses on bringing Environmental Awareness to the rural households. We work to bring about community Environmental Sustainability and promote, Hygiene, Health and Happiness'
                }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="description" content={description}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content="https://www.dharanifoundation.in/"/>
            <meta property="og:site_name" content="Dharani Foundation"/>
            <meta property="og:type" content="website"/>
            <meta name="google-site-verification" content="SXxf_to8didj2Q7LpAYtCuAgeGKninAneCalxPF7seU"/>
            <meta name="keywords"
                  content="Environmental Awareness Programs, Nisarga Ganapathi, Personal Hygiene, Plantation"/>
        </Head>
        <Header/>
        <main className="min-page-height">
            {children}
        </main>
        <Footer/>
    </>
)

export default Layout;
