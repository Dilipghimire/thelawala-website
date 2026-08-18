import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import Press from "@/components/Press";
import OrderSection from "@/components/OrderSection";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Reviews />
        <Press />
        <OrderSection />
        <Location />
      </main>
      <Footer />
    </>
  );
}
