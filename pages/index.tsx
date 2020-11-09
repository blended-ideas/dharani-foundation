import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Dharani Foundation | Belgaum</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description"
                      content="Dharani Foundation is a Non-Profit organisation, formally registered in 2019, which focuses on bringing Environmental Awareness to the rural households. We work to bring about community Environmental Sustainability and promote, Hygiene, Health and Happiness"/>
                <meta property="og:title" content="Dharani Foundation | Belgaum"/>
                <meta property="og:description"
                      content="Dharani Foundation is a Non-Profit organisation, formally registered in 2019, which focuses on bringing Environmental Awareness to the rural households. We work to bring about community Environmental Sustainability and promote, Hygiene, Health and Happiness"/>
                <meta property="og:url" content="https://www.dharanifoundation.in/"/>
                <meta property="og:site_name" content="Dharani Foundation"/>
                <meta property="og:type" content="website"/>
                <meta name="google-site-verification" content="SXxf_to8didj2Q7LpAYtCuAgeGKninAneCalxPF7seU"/>
                <meta name="keywords"
                      content="Environmental Awareness Programs, Nisarga Ganapathi, Personal Hygiene, Plantation"/>
            </Head>
            <Header/>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to <a href="https://nextjs.org">Next.js!</a>
                    </h1>

                    <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p>

                    <div className={styles.grid}>
                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h3>Documentation &rarr;</h3>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="https://nextjs.org/learn" className={styles.card}>
                            <h3>Learn &rarr;</h3>
                            <p>Learn about Next.js in an interactive course with quizzes!</p>
                        </a>

                        <a
                            href="https://github.com/vercel/next.js/tree/master/examples"
                            className={styles.card}
                        >
                            <h3>Examples &rarr;</h3>
                            <p>Discover and deploy boilerplate example Next.js projects.</p>
                        </a>

                        <a
                            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles.card}
                        >
                            <h3>Deploy &rarr;</h3>
                            <p>
                                Instantly deploy your Next.js site to a public URL with Vercel.
                            </p>
                        </a>
                    </div>
                </main>
            </div>
            <Footer/>
        </>
    )
}
