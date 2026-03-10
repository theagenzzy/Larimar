import HeroCinematic from '@/components/sections/HeroCinematic';
import StatsBar from '@/components/sections/StatsBar';
import AboutPreview from '@/components/sections/AboutPreview';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import LifestyleGallery from '@/components/sections/LifestyleGallery';
import InvestmentCTA from '@/components/sections/InvestmentCTA';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import NewsPreview from '@/components/sections/NewsPreview';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroCinematic />
      <StatsBar />
      <AboutPreview />
      <FeaturedProjects />
      <LifestyleGallery />
      <InvestmentCTA />
      <TestimonialSlider />
      <NewsPreview />
      <CTASection />
    </>
  );
}
