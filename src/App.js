import React from 'react';
import './App.css';

import PaginaPrincipal from './pages/PaginaPrincipal';
import Contacto from './pages/Contacto';

import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
      <nav>
        <Link to="/">Principal</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/">
            <PaginaPrincipal />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    )
};

export default App;
