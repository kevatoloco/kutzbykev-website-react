import "./Home.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Services from "./Services";
import Header from "./Header";
import About from "./About";
import Gallery from "./Gallery";
import MetaTags from "react-meta-tags";

function Home() {
  return (
    <div className="home">
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </MetaTags>
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
