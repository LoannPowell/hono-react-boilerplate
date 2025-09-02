import { createFileRoute, redirect } from '@tanstack/react-router';
import {
  CTASection,
  FeaturesSection,
  Footer,
  HeroSection,
  HowItWorksSection,
} from '@/components/landing';
import { landingContent } from '@/config/landing-content';
import { getSession } from '@/lib/auth-client';

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    const session = await getSession();
    if (session.data) {
      throw redirect({
        to: '/dashboard',
      });
    }
  },
  component: Index,
});

function Index() {
  return (
    <div>
      <HeroSection {...landingContent.hero} />
      <FeaturesSection {...landingContent.features} />
      <HowItWorksSection {...landingContent.howItWorks} />
      <CTASection {...landingContent.cta} />
      <Footer {...landingContent.footer} />
    </div>
  );
}
