import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Github, Shield, Terminal } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-primary/20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Terminal className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold">
              <span className="text-gradient-cyber">Soft Vortex</span>
            </h3>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of security researchers and get access to the latest tools, 
            installation guides, and support for your testing needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="cyber-glow hover:scale-105 transition-all duration-300">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord Community
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
              <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white mb-1">Ethical Use</h4>
              <p className="text-sm text-muted-foreground">For authorized testing only</p>
            </div>
            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
              <Terminal className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white mb-1">Open Source</h4>
              <p className="text-sm text-muted-foreground">Community-driven development</p>
            </div>
            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
              <MessageCircle className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white mb-1">Support</h4>
              <p className="text-sm text-muted-foreground">Active community help</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/20 pt-8 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <Badge variant="outline" className="border-primary/30">
              Version 7.1.0
            </Badge>
            <Badge variant="outline" className="border-green-500/30 text-green-400">
              Minecraft 1.21.1
            </Badge>
            <Badge variant="outline" className="border-blue-500/30 text-blue-400">
              Active Development
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">
            © 2024 Soft Vortex Team. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            ⚠️ This toolkit is intended for educational and authorized security testing purposes only. 
            Users are responsible for ensuring compliance with applicable laws and regulations.
          </p>
        </div>
      </div>
    </footer>
  );
};