import css from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import OurServices from "components/OurServices/OurServices";
import Futer from "./components/Futer/Futer";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <OurServices/>
        <PriceList />
      </main>
      <Futer />
    </div>
  );
}

export default App;
