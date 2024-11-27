import FeaturesSection from './Features.component';
import TestimonialsAndCTA from './TestimonialsAndCTA.component';
import WelcomeSection from './WelcomeSection.component';
import PopularTags from './PopularTagSection.component';
import TopResourceCards from './TopResources.component';
import ContributionSteps from './HowThisWorks';
import PlatformFeaturesSection from './PlatformFeatures.component';
import HelpCenter from './HelpCenter.component';
import TrendingResourcesSection from './TrendingResourcesSection.component';
import LatestResourcesSection from './LatestResourcesSection.component';
import RecommendedResourcesSection from './RecommendedResourcesSection.component';
import HeroSection from './HeroSection.component';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

const HomePage = () => {

  const { isSignedIn, user } = useContext(AuthContext);


  const SignedInContent = () => (
    <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
      {user && <WelcomeSection user={user} />}
      <RecommendedResourcesSection />
      <TrendingResourcesSection />
      <LatestResourcesSection />
      <PopularTags />
    </div>
  );

  const GuestContent = () => (
    <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
      <HeroSection />
      <FeaturesSection />
      <ContributionSteps />
      <TopResourceCards />
      <TrendingResourcesSection />
      <PlatformFeaturesSection />
      <TestimonialsAndCTA />
      <HelpCenter />
    </div>
  );

  return (
    <div className="p-6">
      {isSignedIn ? <SignedInContent /> : <GuestContent />}
    </div>
  );
};

export default HomePage;
