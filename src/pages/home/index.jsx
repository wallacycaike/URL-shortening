import { Fragment } from "react";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { ShortenLink } from "../../components/ShortenLink";
import { Statistics } from "../../components/Statistics";

import "./styles.scss";

export function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <HeroSection />
        <ShortenLink />
        <Statistics />
      </main>
    </Fragment>
  );
}

// <i class="fa-brands fa-square-facebook"></i>
// <i class="fa-brands fa-twitter"></i>
// <i class="fa-brands fa-pinterest"></i>
// <i class="fa-brands fa-instagram"></i>
