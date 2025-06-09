
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 with tech styling */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4 animate-fade-in">
            404
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="h-6 w-6 text-primary animate-glow" />
            <h2 className="text-2xl md:text-3xl font-semibold">
              Page Not Found
            </h2>
            <Zap className="h-6 w-6 text-primary animate-glow" />
          </div>
        </div>

        {/* Description */}
        <div className="glass-effect rounded-lg p-8 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <p className="text-lg text-muted-foreground mb-4">
            Looks like you've ventured into uncharted digital territory.
          </p>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist, but don't worry - 
            let's get you back on track with some stellar navigation.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Button asChild size="lg" className="tech-glow">
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="glass-effect hover:tech-glow"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Additional tech-themed decoration */}
        <div className="mt-12 text-xs text-muted-foreground/50 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p>Error Code: ROUTE_NOT_FOUND | Path: {location.pathname}</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
