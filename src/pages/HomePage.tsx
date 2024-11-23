// src/pages/HomePage.tsx
import GlobalLayout from '@/components/layout/GlobalLayout';
import Home from '@/components/common/Home.component';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <GlobalLayout>
      <Home />
    </GlobalLayout>
  );
};

export default HomePage;
