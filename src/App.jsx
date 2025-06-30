import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}
