import React, { Suspense, lazy } from 'react';
import Hero from '../components/sections/Hero';

// Lazy load heavy sections
const VideoIntro = lazy(() => import('../components/sections/VideoIntro'));
const Features = lazy(() => import('../components/sections/Features'));
const SubscriptionForm = lazy(() => import('../components/sections/SubscriptionForm'));

const Home = () => {
    return (
        <>
            <Hero />
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <VideoIntro />
                <Features />
                <SubscriptionForm />
            </Suspense>
        </>
    );
};

export default Home;
