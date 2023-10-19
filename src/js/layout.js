import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import CharacterDetails from "./views/CharacterDetails"; 
import PlanetDetails from "./views/PlanetDetails";


import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters/:characterId" element={<CharacterDetails />} /> {}
            <Route path="/planets/:planetId" element={<PlanetDetails />} /> {}
            <Route path="*" element={<h1>Not found!</h1>} />
            {}
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
