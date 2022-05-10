import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./componentes/header";
import Inicio from "./componentes/inicio";
import Blog from "./componentes/blog";
import AcercaDe from "./componentes/acercaDe";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/acerca-de" element={<AcercaDe/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
   );
}
 
export default App;