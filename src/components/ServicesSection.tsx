import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "./ui/button";

const packages = [
  {
    name: "Basic",
    price: "80",
    currency: "EGP",
    description: "Perfect for simple landing pages",
    icon: Zap,
    features: [
      "Responsive Landing Page",
      "Up to 3 Sections",
      "Basic Animations",
      "Mobile Optimized",
      "Source Code Included",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "200",
    currency: "EGP",
    description: "Ideal for professional websites",
    icon: Star,
    features: [
      "Full Website (5+ pages)",
      "Custom Design",
      "Advanced Animations",
      "SEO Optimization",
      "Contact Form Integration",
      "Free Revisions",
    ],
    popular: true,
  },
  {
    name: "AI Integrated",
    price: "350",
    currency: "EGP",
    description: "Smart solutions with AI power",
    icon: Crown,
    features: [
      "Everything in Pro",
      "AI Chatbot Integration",
      "Smart Recommendations",
      "Data Analytics Dashboard",
      "API Integration",
      "Priority Support",
      "3 Months Free Maintenance",
    ],
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Service <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the perfect package for your project needs
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative p-8 rounded-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up ${
                  pkg.popular
                    ? "card-elegant border-2 border-primary"
                    : "card-elegant elegant-border elegant-border-hover"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-lg mb-4 ${pkg.popular ? 'bg-primary/20' : 'bg-secondary'}`}>
                    <Icon className={`w-8 h-8 ${pkg.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg.description}
                  </p>

                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-playfair font-bold text-primary">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground text-lg">{pkg.currency}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 font-semibold rounded-lg transition-all duration-300 ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
