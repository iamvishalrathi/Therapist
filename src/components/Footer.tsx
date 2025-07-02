import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-medium text-foreground">
              Jennifer Hahm, Ph.D., Licensed Psychologist
            </h3>
            
            <div className="space-y-2 font-sans text-muted-foreground">
              <p>
                <a 
                  href="mailto:jennifer@drjenniferhahm.com" 
                  className="hover:text-primary transition-colors"
                >
                  jennifer@drjenniferhahm.com
                </a>
              </p>
              <p>Phone: (248) 899-8780</p>
              <p>Fax: (248) 579-8190</p>
              <address className="not-italic">
                28975 Haggerty Rd, Novi, MI 48377
              </address>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <Button variant="outline" size="sm">
              Client Portal
            </Button>
            
            <div className="flex gap-4 font-sans text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary transition-colors">
                Good Faith Estimate
              </a>
            </div>
          </div>
          
          <div className="pt-6 border-t border-border">
            <p className="font-sans text-xs text-muted-foreground">
              © 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;