import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="font-body antialiased text-on-surface bg-surface">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <WhyUs />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
