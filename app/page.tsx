
import Header from "./components/Header";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Top from "./components/Top";
import CoseCommission from "./components/Cose";
import ProfileCard from "./components/Profile";
import NewSong from "./components/NewSong";
import Downlode from "./components/Downlode";




export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
        <Top />
      <div className="border-b border-white/10">
        <NewSong />
      </div>
      <div className="border-b border-white/10">
        <News />
      </div>
      <div className="border-b border-white/10">
        <Slider />
      </div>
      <div className="border-b border-white/10">
        <Downlode />
      </div>
      <div className="border-b border-white/10">
        <ProfileCard />
      </div>
      <div className="border-b border-white/10">
        <CoseCommission />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}


