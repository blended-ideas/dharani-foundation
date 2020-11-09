import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommonHead from '../components/CommonHead';
import HomeHero from '../components/Home/Hero';
import HomeAbout from '../components/Home/About';
import HomeVision from '../components/Home/Vision';
import HomeMission from '../components/Home/Mission';
import HomeActivities from '../components/Home/Activities';
import HomeFounders from '../components/Home/Founders';

export default function Home() {
    return (
        <>
            <CommonHead headTitle="Dharani Foundation | Belgaum"/>
            <Header/>
            <HomeHero/>
            <HomeAbout/>
            <HomeVision/>
            <HomeMission/>
            <HomeActivities/>
            <HomeFounders/>
            <Footer/>
        </>
    )
}
