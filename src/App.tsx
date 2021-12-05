import React, { useCallback, useState } from "react";
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
import { Pillow } from "./models/pillow";

export const PillowContext = React.createContext<AppContext>({} as AppContext);
type Filter = {
  ["orderBy"]: { property: keyof Pillow, direction: string };
  ["searchBy"]: { value: string }
};

interface AppContext {
  pillows: Pillow[];
  filter: Filter;
  setFilter: (key: string, value: object) => void;
}

function App() {
  const [filter, setFilter] = useState<Filter>({
    ["orderBy"]: { property: 'id', direction: 'asc' },
    ["searchBy"]: { value: '' }
  } as Filter);

  const setFilterCallback = useCallback(
    (key: string, value: any | ((prev: any) => any)) => {

      setFilter((prev) => {
        return {
          ...prev,
          [key]: value
        }
      })

    },
    [],
  )

  const context: AppContext = {
    pillows: PILLOWS,
    filter: filter,
    setFilter: setFilterCallback,
  }

  return (
    <div className="App">
      <Router>
        <PillowContext.Provider value={context}>
          <Header />
          <Switch>
            <Route path='/home' render={() => <Home />} />
            <Route path='/catalog' render={() => <Catalog />} />
          </Switch>
        </PillowContext.Provider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;