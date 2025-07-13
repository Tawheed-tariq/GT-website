import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Github, Database, Monitor } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const links = [
    { label: "Paper", url: "#", icon: FileText },
    { label: "Code", url: "#", icon: Github },
    { label: "arXiv", url: "#", icon: ExternalLink },
    { label: "Data", url: "#", icon: Database },
    { label: "Demo", url: "#", icon: Monitor },
  ];

  return (
    <header className="bg-background border-b border-border transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-8 relative">
      
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground leading-tight animate-fade-in">
          <span className="font-extrabold text-primary">D-MASTER</span>: Mask Annealed Transformer for Unsupervised Domain Adaptation in Breast Cancer Detection from Mammograms
        </h1>

        {/* Conference Badge */}
        <div className="flex justify-center mb-8 animate-scale-in">
          <a 
            href="https://conferences.miccai.org/2024/en/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-all duration-300 hover-scale"
          >
            
          </a>
        </div>

        {/* Authors */}
        <div className="text-center mb-6">
          <div className="text-lg text-muted-foreground space-x-2 flex flex-wrap justify-center items-center gap-1">
            <a href="https://www.tajamulashraf.com/" className="text-primary hover:underline">Tajamul Ashraf</a>
            <span className="text-sm">1</span>,
            <a href="https://scholar.google.com/citations?user=6A3dai4AAAAJ" className="text-primary hover:underline">Krithika Rangarajan</a>
            <span className="text-sm">2</span>,
            <a href="https://www.linkedin.com/in/mohit-gambhir-2ba41b254/?originalSubdomain=in" className="text-primary hover:underline">Mohit Gambhir</a>
            <span className="text-sm">2</span>,
            <a href="https://www.linkedin.com/in/dr-richa-gauba-34000210b/?original_referer=https%3A%2F%2Fwww%2Ebing%2Ecom%2F&originalSubdomain=in" className="text-primary hover:underline">Richa Gabha</a>
            <span className="text-sm">2</span>,
            <a href="https://www.cse.iitd.ac.in/~chetan/" className="text-primary hover:underline">Chetan Arora</a>
            <span className="text-sm">1</span>
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            <span className="text-sm">1</span>Indian Institute of Technology Delhi, <span className="text-sm">2</span>AIIMS Delhi
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="academic"
              asChild
              className="shadow-soft hover-scale transition-all duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;