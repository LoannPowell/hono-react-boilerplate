import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { Link } from '@tanstack/react-router'

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonLink: string
  badgeText: string
  features: string[]
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  badgeText,
  features
}: HeroSectionProps) {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      
      <div className="relative max-w-7xl mx-auto text-center">
        <Badge variant="secondary" className="mb-8 text-sm px-4 py-2">
          <Zap className="w-4 h-4 mr-2" />
          {badgeText}
        </Badge>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-logo tracking-tight mb-8 leading-tight">
          <span className="text-foreground">
            {title}
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {subtitle}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button size="lg" asChild>
            <Link to={primaryButtonLink}>
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to={secondaryButtonLink}>Sign In</Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
