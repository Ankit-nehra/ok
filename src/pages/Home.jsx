import HeroSlider from '../components/HeroSlider';
import ScrollToTopButton from '../components/ScrollToTopButton';
import About from './About'
import Contact from './Contact'
const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroSlider />
      <ScrollToTopButton />
      <About/>
      <Contact/>
      
    </div>

  );
};

export default Home;
