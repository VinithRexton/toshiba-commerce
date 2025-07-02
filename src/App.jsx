import Navbar from './components/Navbar';
import HeroHome from './components/HeroHome';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroHome/>
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}
