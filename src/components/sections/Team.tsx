import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Code, Wrench } from "lucide-react";

const team = [
  {
    name: "Theodore612",
    role: "Lead Developer & Founder",
    avatar: "https://cdn.discordapp.com/avatars/1259287760221507616/fe0870f3d5b0d9e7d9e5a3933e3557a2?size=1024",
    icon: Crown,
    color: "text-yellow-400",
    description: "Architect of the Soft Vortex ecosystem and lead security researcher"
  },
  {
    name: "Keyshujin", 
    role: "Senior Mentor",
    avatar: "https://cdn.discordapp.com/avatars/384798875493597194/8a18f3cb919a62db5a385fb624b20888?size=1024",
    icon: Code,
    color: "text-blue-400",
    description: "Experienced developer guiding project direction and code quality"
  },
  {
    name: "Piotrek5S",
    role: "Developer & Co-founder", 
    avatar: "https://cdn.discordapp.com/avatars/548520993535295548/077dc2a82c7bacf6a0abb4a97fa945a4?size=1024",
    icon: Wrench,
    color: "text-green-400",
    description: "Core developer specializing in exploit development and testing frameworks"
  }
];

export const Team = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-matrix">Core Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Security researchers and developers dedicated to advancing cybersecurity testing tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => {
            const Icon = member.icon;
            
            return (
              <Card 
                key={index}
                className="border-primary/30 bg-primary/5 backdrop-blur-sm hover:scale-105 transition-all duration-300 cyber-glow animate-float"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/30 cyber-glow">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 p-2 rounded-full bg-background border border-primary/30 ${member.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <Badge variant="outline" className="mb-4 border-primary/30">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* About section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <Card className="border-primary/30 bg-primary/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient-cyber mb-4">About Soft Vortex</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Soft Vortex is a specialized NBT (Named Binary Tag) toolkit designed for Minecraft security research. 
                Our team focuses on developing legitimate tools for authorized penetration testing, server stress analysis, 
                and cybersecurity education within controlled environments.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="outline" className="border-green-500/30 text-green-400">
                  Ethical Testing
                </Badge>
                <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                  Research Focused
                </Badge>
                <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                  Open Source
                </Badge>
                <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                  Community Driven
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};