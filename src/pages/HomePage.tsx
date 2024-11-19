// src/pages/HomePage.tsx
import GlobalLayout from '@/components/layout/GlobalLayout';
import React from 'react';
import ResourceList from '@/components/features/ResourceList';

const HomePage: React.FC = () => {
  return (
    <GlobalLayout>
        <ResourceList />
    </GlobalLayout>
  );
};

export default HomePage;
