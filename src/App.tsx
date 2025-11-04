import Hero from './components/Hero';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import TechSection from './components/TechSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <DemoSection />
      <TechSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
