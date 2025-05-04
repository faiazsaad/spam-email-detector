import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DatasetPage from './pages/DatasetPage';
import MethodologyPage from './pages/MethodologyPage';
import ResultsPage from './pages/ResultsPage';
import TeamPage from './pages/TeamPage';
import ReportPage from './pages/ReportPage';

function App() {
  return (
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
  );
}

export default App;