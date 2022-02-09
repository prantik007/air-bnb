import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Card/>
      <Content />
    </>
  );
}

export default App;
