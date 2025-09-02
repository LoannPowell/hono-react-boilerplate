import { createFileRoute, redirect } from '@tanstack/react-router'
import { getSession } from '@/lib/auth-client'
import { HeroSection, FeaturesSection, HowItWorksSection, CTASection, Footer } from '@/components/landing'
import { landingContent } from '@/config/landing-content'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    const session = await getSession()
    if (session.data) {
      throw redirect({
        to: '/dashboard',
      })
    }
  },
  component: Index,
})

function Index() {
  return (
    <div>
      <HeroSection {...landingContent.hero} />
      <FeaturesSection {...landingContent.features} />
      <HowItWorksSection {...landingContent.howItWorks} />
      <CTASection {...landingContent.cta} />
      <Footer {...landingContent.footer} />
    </div>
  )
}