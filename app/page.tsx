
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import Goods from "./components/Goods";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* <Home /> */}
      <Hero />
      <News />
      <Slider />
      <Goods />
      <Contact />
      <Footer />
    </main>
  );
}
