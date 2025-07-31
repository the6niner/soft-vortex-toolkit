import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bomb, 
  Wifi, 
  Rocket, 
  DoorOpen, 
  Download, 
  Shield,
  Zap,
  Bug
} from "lucide-react";

const tools = [
  {
    icon: Bomb,
    title: "Crash Methods",
    description: "Advanced crash testing utilities for stress testing server stability and resilience",
    status: "Available",
    category: "Stress Testing",
    color: "red",
    features: ["Memory overflow", "Thread exhaustion", "Resource depletion", "Packet flooding"]
  },
  {
    icon: Wifi,
    title: "SOCKS5 Proxy List",
    description: "Curated proxy list for anonymous testing and network traffic analysis",
    status: "Available", 
    category: "Network",
    color: "blue",
    features: ["Global proxies", "High-speed nodes", "Rotating IPs", "SSL support"]
  },
  {
    icon: Rocket,
    title: "Meteor Modpack",
    description: "Enhanced client modifications for advanced testing capabilities [1.21.1]",
    status: "Available",
    category: "Client Mods",
    color: "purple",
    features: ["Custom exploits", "Bypass modules", "Debug tools", "Performance mods"]
  },
  {
    icon: DoorOpen,
    title: "Backdoors & Force-ops",
    description: "Administrative access tools for authorized penetration testing scenarios",
    status: "Coming Soon",
    category: "Access Control",
    color: "orange",
    features: ["Silent injection", "Privilege escalation", "Persistence methods", "Clean removal"]
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'red':
      return {
        icon: 'text-red-400',
        glow: 'cyber-glow-danger',
        border: 'border-red-500/30',
        bg: 'bg-red-500/10'
      };
    case 'blue':
      return {
        icon: 'text-blue-400',
        glow: 'cyber-glow',
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10'
      };
    case 'purple':
      return {
        icon: 'text-purple-400',
        glow: 'cyber-glow',
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10'
      };
    case 'orange':
      return {
        icon: 'text-orange-400',
        glow: '',
        border: 'border-orange-500/30',
        bg: 'bg-orange-500/10'
      };
    default:
      return {
        icon: 'text-primary',
        glow: 'cyber-glow',
        border: 'border-primary/30',
        bg: 'bg-primary/10'
      };
  }
};

export const Tools = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-cyber">Security Toolkit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional-grade tools for cybersecurity research, penetration testing, and server stress analysis
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const colors = getColorClasses(tool.color);
            const Icon = tool.icon;
            
            return (
              <Card 
                key={index} 
                className={`${colors.border} ${colors.bg} backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-float`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${colors.bg} ${colors.glow} mb-4`}>
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <Badge 
                      variant={tool.status === "Available" ? "default" : "secondary"}
                      className={tool.status === "Available" ? "" : "bg-muted"}
                    >
                      {tool.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white">{tool.title}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {tool.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {tool.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full mt-6 ${colors.glow}`}
                    variant={tool.status === "Available" ? "default" : "secondary"}
                    disabled={tool.status !== "Available"}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {tool.status === "Available" ? "Download" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Hotbar download section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-primary/30 bg-primary/10 cyber-glow">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient-cyber">Complete Hotbar Kit</CardTitle>
              <CardDescription className="text-base">
                Full toolkit with all available utilities - Version 7.1.0
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="cyber-glow-green hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Complete Hotbar [v7.1.0]
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Join our Discord for installation instructions and support
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};