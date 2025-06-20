
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tech-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tech-accent/5 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="gradient-text">Siddharth Singh</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12">
            <span className="border-r-2 border-primary animate-pulse">{text}</span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            I craft beautiful, performant web applications using modern technologies. 
            Passionate about creating digital experiences that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="tech-glow">
              View My Work
            </Button>
            {/* <Button variant="outline" size="lg">
              Download Resume
            </Button> */}
            <a href='/resume.pdf' download="Siddharth_Singh_Resume.pdf" className="inline-flex items-center justify-center px-6 py-3 h-11 bg-black border border-input text-foreground rounded-md text-sm font-bold hover:bg-accent transition-colors">
                Download Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Ego-TheCelestial" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/siddharthsingh-dev/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
