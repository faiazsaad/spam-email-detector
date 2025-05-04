import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const DatasetPage = lazy(() => import('./pages/DatasetPage'));
const MethodologyPage = lazy(() => import('./pages/MethodologyPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dataset" element={<DatasetPage />} />
          <Route path="methodology" element={<MethodologyPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="report" element={<ReportPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
