import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <BrowserRouter>

      <main>
        <Header />
      </main>
      
      <section className="section--main-body">
        
        <Route exact path="/"
          component={WelcomePage}
        />
        <Route exact path="/characters"
          component={CharacterList}
        />

      </section>

    </BrowserRouter>
  );
}
