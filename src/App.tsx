import "./App.css";
import { CardList } from './components/list/CardList'
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Heading } from "./components/home/Heading";
import { PILLOWS } from "./const/pillows";

function App() {
  return (
    <div className="App">
      <Header />
      <Heading pillow={PILLOWS[0]} />
      <CardList pillows={PILLOWS} />
      <Footer />
    </div>
  );
}

export default App;