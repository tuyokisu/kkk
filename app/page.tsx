
import Header from "./components/Header";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Top from "./components/Top";
import CoseCommission from "./components/Cose";




export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Top />
      <News />
      <Slider />
      <CoseCommission />
      <Contact />
      <Footer />
    </main>
  );
}


