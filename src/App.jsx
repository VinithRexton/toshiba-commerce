import Navbar from './components/Navbar';
import HeroHome from './components/HeroHome';
import OpportunitiesSection from './components/OpportunitiesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroHome/>
      <OpportunitiesSection />
      <Footer />
    </div>
  );
}
