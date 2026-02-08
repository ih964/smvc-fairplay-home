import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teams from "@/components/Teams";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Volunteers from "@/components/Volunteers";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileQuickActions from "@/components/MobileQuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <About />
        <Teams />
        <Gallery />
        <Volunteers />
        <Sponsors />
        <News />
        <Contact />
      </main>
      <Footer />
      <MobileQuickActions />
    </div>
  );
};

export default Index;
