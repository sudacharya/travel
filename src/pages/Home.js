import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Different Treks" subtitle="travel packages starting from $299">
          <Link to="/packages" className="btn-primary">
            our packages
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
