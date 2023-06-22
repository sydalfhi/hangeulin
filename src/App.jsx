import Blurry from "./components/Blurry";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";
import Jumbo from "./components/jumbo/Jumbo";
import { Nav } from "./components/navbar/Nav";
import Paket from "./components/paket/Paket";
import Service from "./components/service/Service";
import Testimonial from "./components/testimonial/testimonial";

function App() {
  return (
    <>
      <main className="pb-[90px]">
        <Blurry />
        <Nav />
        <Jumbo />
        <Service />
        <Paket />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
