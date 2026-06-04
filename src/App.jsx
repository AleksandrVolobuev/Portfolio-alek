import React, { useEffect, lazy, Suspense } from "react";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./i18n";
import "./scss/vendor/swiper-bundle.css";
import "./scss/vendor/odometer-theme.css";
import "./scss/vendor/odometer-theme-default.css";

// Критичные компоненты
import Preloader from "./components/Preloader/Preloader";
import MagicCursor from "./components/MagicCursor/MagicCursor";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Ленивые компоненты
const FeatureSection = lazy(() => import("./components/FeatureSection/FeatureSection"));
const AboutSection = lazy(() => import("./components/AboutSection/AboutSection"));
const ResumeSection = lazy(() => import("./components/ResumeSection/ResumeSection"));
const MarqueeSection = lazy(() => import("./components/MarqueeSection/MarqueeSection"));
const ServiceSection = lazy(() => import("./components/ServiceSection/ServiceSection"));
const PortfolioSection = lazy(() => import("./components/PortfolioSection/PortfolioSection"));
const PricingSection = lazy(() => import("./components/PricingSection/PricingSection"));
const BrandSection = lazy(() => import("./components/BrandSection/BrandSection"));
const TestimonialSection = lazy(() => import("./components/TestimonialSection/TestimonialSection"));
const BlogSection = lazy(() => import("./components/BlogSection/BlogSection"));
const ContactSection = lazy(() => import("./components/ContactSection/ContactSection"));
const Footer = lazy(() => import("./components/Footer/Footer"));

// Компонент загрузки для ленивых секций
const SectionLoader = () => (
  <div className="d-flex justify-content-center p-4">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// Хук AOS
const useAOS = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({ duration: 1000, once: true, offset: 50, delay: 100 });
    };

    if (document.readyState === "complete") {
      initAOS();
    } else {
      window.addEventListener("load", initAOS);
      return () => window.removeEventListener("load", initAOS);
    }
  }, []);
};

// Хук Bootstrap JS
const useBootstrap = () => {
  useEffect(() => {
    const timer = setTimeout(async () => {
      await import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
};

function App() {
  useAOS();
  useBootstrap();

  return (
    <div className="page-wrapper overflow-visible">
      <Preloader />
      <MagicCursor />
      <Header />

      <main>
        <HeroSection />

        <Suspense fallback={<SectionLoader />}>
          <FeatureSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ResumeSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MarqueeSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ServiceSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PortfolioSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BrandSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TestimonialSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BlogSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>

        <ScrollToTop />
      </main>
    </div>
  );
}

export default App;
