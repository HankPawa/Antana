import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import MenuPageSection from "./sections/MenuPageSection.jsx";
import LocationSection from "./sections/LocationSection.jsx";
import CartDrawer from "./components/cart/CartDrawer.jsx";
import CartSummaryBar from "./components/cart/CartSummaryBar.jsx";

export default function App() {
  const [menu, setMenu] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      fetch("/api/menu").then((r) => r.json()),
      fetch("/api/restaurant-info").then((r) => r.json()),
    ])
      .then(([menuData, infoData]) => {
        if (cancelled) return;
        setMenu(menuData);
        setRestaurantInfo(infoData);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar restaurantInfo={restaurantInfo} onOpenCart={() => setIsCartOpen(true)} />

      <main className="flex-1">
        <HeroSection restaurantInfo={restaurantInfo} />
        <AboutSection />
        <MenuPageSection menu={menu} restaurantInfo={restaurantInfo} loadError={loadError} />
        <LocationSection restaurantInfo={restaurantInfo} />
      </main>

      <Footer restaurantInfo={restaurantInfo} />

      <CartSummaryBar onOpenCart={() => setIsCartOpen(true)} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        restaurantInfo={restaurantInfo}
      />
    </div>
  );
}
