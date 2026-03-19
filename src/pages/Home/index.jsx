import { lazy, Suspense } from 'react';
import Hero from './Hero';
import Features from './Features';

const ProgramsPreview = lazy(() => import('./ProgramsPreview'));
const TrainersPreview = lazy(() => import('./TrainersPreview'));
const Testimonials = lazy(() => import('./Testimonials'));
const CTABanner = lazy(() => import('./CTABanner'));

const SectionSkeleton = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-2 border-[#F26818]/30 border-t-[#F26818] animate-spin" />
  </div>
);

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Suspense fallback={<SectionSkeleton />}>
        <ProgramsPreview />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TrainersPreview />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CTABanner />
      </Suspense>
    </main>
  );
};

export default Home;
