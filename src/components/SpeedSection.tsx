import { Clock, Rocket, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24-48 Hours",
    description: "Lightning-fast delivery for most projects",
  },
  {
    icon: Rocket,
    title: "Rapid Development",
    description: "Efficient workflow without compromising quality",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Pixel-perfect results every time",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always available to answer your questions",
  },
];

const SpeedSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main highlight */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl card-glass neon-border mb-8 animate-pulse-glow">
            <Clock className="w-8 h-8 text-primary" />
            <span className="font-orbitron text-3xl md:text-4xl font-bold text-gradient">
              Delivery within 24-48 Hours
            </span>
          </div>
          
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-4">
            Speed Without Compromise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I understand that time is crucial for your business. That's why I prioritize 
            rapid delivery while maintaining the highest quality standards.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl card-glass neon-border neon-border-hover text-center transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpeedSection;
