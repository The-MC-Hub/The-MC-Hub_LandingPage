import React, { Suspense, lazy } from 'react';

// Re-use the full Features component
const FeaturesComponent = lazy(() => import('../components/sections/Features'));

const FeaturesPage = () => {
    return (
        <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <FeaturesComponent />
            </Suspense>
        </main>
    );
};

export default FeaturesPage;
