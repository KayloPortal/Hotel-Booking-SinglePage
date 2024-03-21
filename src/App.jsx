import "./App.css";
import Header from "./components/Sections/Header/Header";
import Hotels from "./components/Sections/Hotels/Hotels";
import Map from "./components/Sections/Map/Map";

function App() {
  return (
    <>
      <Header />
      <main className="container main">
        <Hotels />
        <Map />
      </main>
    </>
  );
}

export default App;
