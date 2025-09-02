import type { LucideIcon } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  iconBgColor: string;
}

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export function FeaturesSection({ title, subtitle, features }: FeaturesSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-logo text-foreground mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${feature.iconBgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-opacity`}
                  >
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-semibold mb-3">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
