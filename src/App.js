import React from 'react';
import   Header from "./components/header";
import Footer from  "./components/footer"
import BannerSection from  "./components/bannerSection";
import  ContentSection from "./components/contentSection";
import Projects from "./components/projects";
import Services from "./components/services";
import  Testimonials from "./components/testimonials"
// import BaseRouter from "./router";
function App() {
  return (
  <React.Fragment>
    < Header />
    <BannerSection  />
    <ContentSection />
    <Services />
    < Projects />
    <Testimonials />
    < Footer />
 
  </React.Fragment>
  );
}

export default App;
