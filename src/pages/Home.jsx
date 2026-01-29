import React, { Suspense, lazy } from 'react';
import Hero from '../components/sections/Hero';

// Lazy load heavy sections
const FeaturesPreview = lazy(() => import('../components/sections/FeaturesPreview'));
const SubscriptionForm = lazy(() => import('../components/sections/SubscriptionForm'));


const Home = () => {
    return (
        <>
            <Hero />
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <FeaturesPreview />
                <SubscriptionForm />
            </Suspense>
        </>
    );
};

export default Home;
