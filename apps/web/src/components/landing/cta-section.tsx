import { Link } from '@tanstack/react-router';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CTASectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonLink: string;
}

export function CTASection({
  icon: IconComponent,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
}: CTASectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-primary/10">
      <div className="max-w-5xl mx-auto text-center">
        <Card className="border-0 shadow-2xl">
          <CardContent className="pt-16 pb-16 px-8">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <IconComponent className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-logo mb-6">{title}</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">{description}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to={primaryButtonLink}>
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
