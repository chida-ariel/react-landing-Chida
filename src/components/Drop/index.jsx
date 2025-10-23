import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Permission from "./Permission";
import Content from "./Content";
import Collaboration from "./Collaboration";
import Security from "./Security";
import Dropbox from "./Dropbox";
import Discover from "./Discover";
import Footer from "./Footer";

function Drop() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Permission />
      <Content />
      <Collaboration />
      <Security />
      <Dropbox />
      <Discover />
      <Footer />
    </div>
  );
}

export default Drop;
