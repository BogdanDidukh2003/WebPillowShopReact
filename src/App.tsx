import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Catalog } from "./components/catalog/Catalog";
import { Pillow } from "./models/pillow";
import { getPillows } from "./components/api/Api";
import { MyLoader } from "./components/loader/MyLoader";
import PillowDetails from "./components/catalog/PillowDetails";

export const PillowContext = React.createContext<AppContext>({} as AppContext);
type Filter = { [key: string]: any };

interface AppContext {
  pillows: Pillow[];
  filter: Filter;
  setFilter: (key: string, value: any) => void;
  isLoading: boolean;
}

function App() {
  const [filter, setFilter] = useState<Filter>({ ['searchBy']: '' } as Filter);

  const [pillows, setPillows] = useState<Pillow[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    pillows: pillows,
    filter: filter,
    setFilter: setFilterCallback,
    isLoading
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await getPillows(filter);
        setPillows(res.data as Pillow[]);
      }
      catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })()
  }, [filter])

  return (
    <div className="App">
      <MyLoader isLoading={isLoading} />
      <Router>
        <PillowContext.Provider value={context}>
          <Header />
          <Switch>
            <Route path='/home' render={() => <Home />} />
            <Route exact path='/catalog' render={(props) => <Catalog {...props} />} />
            <Route path="/catalog/:id" render={(props) => <PillowDetails {...props} />} />
          </Switch>
        </PillowContext.Provider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;