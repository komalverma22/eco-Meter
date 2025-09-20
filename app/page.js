import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Faq/>
      <Footer/>
    </>
  );
}