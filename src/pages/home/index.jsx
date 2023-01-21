import { Fragment } from "react";
import { Footer } from "../../components/Footer";
import { Boost } from "../../components/GetStarted";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { ShortenLink } from "../../components/ShortenLink";
import { Statistics } from "../../components/Statistics";

import "./styles.scss";

export function Home() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <HeroSection />
        <ShortenLink />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </Fragment>
  );
}
