import "./Home.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Services from "./Services";
import Header from "./Header";
import About from "./About";
import Gallery from "./Gallery";

function Home() {
  return (
    <div className="home">
      <Header />
      <About />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
