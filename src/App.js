import React from "react";
import { About, Footer, Work, Header, Skills, Testimonial } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Work />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
