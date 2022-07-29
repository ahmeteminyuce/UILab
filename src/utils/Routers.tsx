import * as React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// layouts
import PageLoader from '@layouts/PageLoader';

// components
import StickyHeader from '@components/StickyHeader';
import TopButton from '@components/TopButton';

// routes
const Route_Index = lazy(() => import("../App"));
const Route_Calendar = lazy(() => import("../Calendar"));

export default function Routers() {
    return (
        <>
            <StickyHeader />

            <BrowserRouter>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Route_Index />} />
                        <Route path="calendar" element={<Route_Calendar />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>

            <TopButton />
        </>
    );
}