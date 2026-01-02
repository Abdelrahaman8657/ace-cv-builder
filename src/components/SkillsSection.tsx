import { Code2, Palette, Cpu, Smartphone, Zap, Globe } from "lucide-react";

const skills = [
  {
    icon: Code2,
    name: "HTML5",
    description: "Semantic & accessible markup",
    color: "text-orange-400",
  },
  {
    icon: Palette,
    name: "CSS3",
    description: "Modern styling & animations",
    color: "text-blue-400",
  },
  {
    icon: Zap,
    name: "JavaScript",
    description: "Dynamic & interactive features",
    color: "text-yellow-400",
  },
  {
    icon: Globe,
    name: "React",
    description: "Component-based architecture",
    color: "text-cyan-400",
  },
  {
    icon: Cpu,
    name: "AI Integration",
    description: "Smart solutions & automation",
    color: "text-purple-400",
  },
  {
    icon: Smartphone,
    name: "Responsive Design",
    description: "Mobile-first approach",
    color: "text-green-400",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
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
                className="group relative p-6 rounded-2xl card-glass neon-border neon-border-hover transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-secondary/50 mb-4 ${skill.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-orbitron text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>

                  {/* Skill level indicator */}
                  <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 group-hover:w-full"
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
