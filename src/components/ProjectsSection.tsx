
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: '/placeholder.svg',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/placeholder.svg',
      tech: ['Vue.js', 'Express', 'Weather API', 'Chart.js'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills, built with modern web technologies.',
      image: '/placeholder.svg',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden glass-effect hover:tech-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  {project.featured && (
                    <span className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded mb-2">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
