
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone,
  Cloud,
  GitBranch,
  Palette,
  Zap
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-8 w-8" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind'],
      color: 'tech-primary'
    },
    {
      title: 'Backend Development',
      icon: <Database className="h-8 w-8" />,
      skills: ['Node.js', 'Express', 'Python', 'JavaScript', 'MongoDB', 'Firebase'],
      color: 'tech-secondary'
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="h-8 w-8" />,
      skills: ['Git', 'GitHub', 'GitLab'],
      color: 'tech-primary'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with modern technologies to build scalable and efficient solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-effect hover:tech-glow transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-3 group-hover:animate-float">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
