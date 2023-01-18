import { Fragment } from "react";
import { Header } from "../../components/Header/Header";
import { HeroSection } from "../../components/HeroSection/HeroSection";

export function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <HeroSection />
      </main>
    </Fragment>
  );
}

// <i class="fa-brands fa-square-facebook"></i>
// <i class="fa-brands fa-twitter"></i>
// <i class="fa-brands fa-pinterest"></i>
// <i class="fa-brands fa-instagram"></i>
