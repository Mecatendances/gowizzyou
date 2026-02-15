import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { LogoScroll } from '@/components/sections/LogoScroll';
import { Showcase } from '@/components/sections/Showcase';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { ClientsBanner } from '@/components/sections/ClientsBanner';
import { PricingPreview } from '@/components/sections/PricingPreview';
import { WebinarCTA } from '@/components/sections/WebinarCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <LogoScroll />
      <Features />
      <Showcase />
      <Testimonials />
      <ClientsBanner />
      <PricingPreview />
      <WebinarCTA />
    </>
  );
}
