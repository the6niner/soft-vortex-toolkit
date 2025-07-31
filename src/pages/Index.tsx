import { Hero } from "@/components/sections/Hero";
import { Tools } from "@/components/sections/Tools";
import { Team } from "@/components/sections/Team";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Tools />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
