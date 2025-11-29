import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import Schedule from "./components/Schedule";
import MusicVideo from "./components/MusicVideo";
import Goods from "./components/Goods";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <Schedule />
      <Slider />
      <MusicVideo />
      <Goods />
      <Contact />
      <Footer />
    </main>
  );
}
