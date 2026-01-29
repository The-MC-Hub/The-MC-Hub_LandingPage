import React, { Suspense, lazy } from 'react';

// Re-use the existing ComingSoon section component
const ComingSoonComponent = lazy(() => import('../components/sections/ComingSoon'));

const ComingSoonPage = () => {
    return (
        <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Added padding top to account for fixed navbar if applicable, and minHeight */}
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <ComingSoonComponent />
            </Suspense>
        </main>
    );
};

export default ComingSoonPage;
