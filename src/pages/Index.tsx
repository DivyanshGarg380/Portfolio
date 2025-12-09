import  Navbar  from "@/components/Navbar";
import  HeroSection  from "@/components/HeroSection";
import  AboutSection  from "@/components/AboutSection";
import  EducationSection  from "@/components/EducationSection";
import  ExperienceSection  from "@/components/ExperienceSection";
import  ProjectsSection  from "@/components/ProjectsSection";
import  YouTubeSection  from "@/components/YouTubeSection";
import  SpotifySection  from "@/components/SpotifySection";
import  HobbiesSection  from "@/components/HobbiesSection";
import  ConnectSection  from "@/components/ConnectSection";
import  Footer  from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <YouTubeSection />
        <SpotifySection />
        <HobbiesSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;