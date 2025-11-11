import './App.css';
import CourseGrid from './components/CourseGrid';
import Header from "./components/Header"
import Hero from "./components/Hero"
import PlatformShowcase from './components/PlatformShowcase';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PlatformShowcase/>
      <CourseGrid />
      <Footer />
    </div>
  );
}

export default App;
