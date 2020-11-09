import React from 'react';
import Head from 'next/head';

const CommonHead = ({headTitle = null, metaDescription = null, metaKeywords = null}) => {
    headTitle = headTitle || 'Dharani Foundation | Belgaum';
    metaDescription = metaDescription || 'Dharani Foundation is a Non-Profit organisation, formally registered in 2019, which focuses on bringing Environmental Awareness to the rural households. We work to bring about community Environmental Sustainability and promote, Hygiene, Health and Happiness';
    metaKeywords = metaKeywords || 'Environmental Awareness Programs, Nisarga Ganapathi, Personal Hygiene, Plantation';
    return (
        <Head>
            <title>{headTitle}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="description" content={metaDescription}/>
            <meta property="og:title" content={headTitle}/>
            <meta property="og:description" content={metaDescription}/>
            <meta property="og:url" content="https://www.dharanifoundation.in/"/>
            <meta property="og:site_name" content="Dharani Foundation"/>
            <meta property="og:type" content="website"/>
            <meta name="google-site-verification" content="SXxf_to8didj2Q7LpAYtCuAgeGKninAneCalxPF7seU"/>
            <meta name="keywords" content={metaKeywords}/>
        </Head>
    )
};

export default CommonHead;
