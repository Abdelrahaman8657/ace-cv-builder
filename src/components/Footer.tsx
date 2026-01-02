import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-playfair text-lg font-bold text-gradient">
            Abdelrahman
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Abdelrahman © {new Date().getFullYear()}</span>
          </div>

          <div className="text-muted-foreground text-sm">
            Front-end Developer & AI Expert
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
