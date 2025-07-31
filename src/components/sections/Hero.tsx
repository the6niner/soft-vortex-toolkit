import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Terminal, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status badge */}
          <Badge variant="outline" className="mb-8 text-primary border-primary/30 bg-primary/10 cyber-glow">
            <Terminal className="w-3 h-3 mr-2" />
            Active Development • v7.1.0
          </Badge>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gradient-cyber">Soft</span>
            <span className="text-white"> Vortex</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Advanced Minecraft NBT Toolkit for
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-12 text-gradient-matrix">
            Cybersecurity Testing & Penetration Research
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-green-400">
              <Zap className="w-4 h-4" />
              <span className="font-mono text-sm">Stress Testing</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Shield className="w-4 h-4" />
              <span className="font-mono text-sm">Security Research</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-sm">Penetration Testing</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cyber-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
              <Terminal className="w-5 h-5 mr-2" />
              Download Toolkit
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-4">
              Join Discord Community
            </Button>
          </div>
          
          {/* Warning notice */}
          <div className="mt-12 p-4 border border-red-500/30 bg-red-500/10 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-red-200 font-mono">
              ⚠️ FOR AUTHORIZED TESTING ONLY • Use responsibly on owned servers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};