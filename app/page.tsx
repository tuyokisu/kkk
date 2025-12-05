
import Header from "./components/Header";
import News from "./components/News";
import Goods from "./components/Goods";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Top from "./components/Top";
import Contact2 from "./components/Contact2";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Top />
      <News />
      <Slider />
      <Goods />
      <Contact />
      <Contact2 />
      <Footer />
    </main>
  );
}

