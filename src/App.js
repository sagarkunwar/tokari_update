import React from "react";
import "./styles/App.css";

//Components
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
// import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import People from "./Components/People";
import Footer from "./Components/Footer";
import Team from "./Components/Team";

function App() {
  // const { name } = useGlobalContext();
  return (
    <React.Fragment>
      <Navbar />
      <ImageSlider />
      {/* Commented for Future Updates <Products /> */}
      <AboutUs />
      {/* <People /> */}
      <Team />

      <Footer />
    </React.Fragment>
  );
}

export default App;
