import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { PILLOWS } from "./const/pillows";
import { Home } from "./components/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Catalog } from "./components/catalog/Catalog";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/home' render={() => <Home pillows={PILLOWS} />} />
          <Route path='/catalog' render={() => <Catalog pillows={PILLOWS} />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;