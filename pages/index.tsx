import React from 'react';
import HomeHero from '../components/Home/Hero';
import HomeAbout from '../components/Home/About';
import HomeVision from '../components/Home/Vision';
import HomeMission from '../components/Home/Mission';
import HomeActivities from '../components/Home/Activities';
import HomeFounders from '../components/Home/Founders';
import HomeMembers from '../components/Home/HomeMemebers';
import HomeFinalMessage from '../components/Home/FinalMessage';
import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <HomeHero/>
            <HomeAbout/>
            <HomeVision/>
            <HomeMission/>
            <HomeActivities/>
            <HomeFounders/>
            <HomeMembers/>
            <HomeFinalMessage/>
        </Layout>
    )
}
