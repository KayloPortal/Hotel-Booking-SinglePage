import "./App.css";
import Header from "./components/Sections/Header/Header";
import Hotels from "./components/Sections/Hotels/Hotels";
import MapSection from "./components/Sections/Map/Map";

function App() {
  return (
    <>
      <Header />
      <main className="container main">
        <Hotels />
        <MapSection />
      </main>
    </>
  );
}

export default App;
