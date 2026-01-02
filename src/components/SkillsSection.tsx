import { Code2, Palette, Cpu, Smartphone, Zap, Globe } from "lucide-react";

const skills = [
  {
    icon: Code2,
    name: "HTML5",
    description: "Semantic & accessible markup",
  },
  {
    icon: Palette,
    name: "CSS3",
    description: "Modern styling & animations",
  },
  {
    icon: Zap,
    name: "JavaScript",
    description: "Dynamic & interactive features",
  },
  {
    icon: Globe,
    name: "React",
    description: "Component-based architecture",
  },
  {
    icon: Cpu,
    name: "AI Integration",
    description: "Smart solutions & automation",
  },
  {
    icon: Smartphone,
    name: "Responsive Design",
    description: "Mobile-first approach",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mastering the latest technologies to build exceptional web experiences
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative p-6 rounded-lg card-elegant elegant-border elegant-border-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-lg bg-secondary mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>

                  {/* Skill level indicator */}
                  <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 group-hover:w-full"
                      style={{ width: '85%' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
