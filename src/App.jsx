import Menu from "./components/Menu";
import Hot from "./components/Hot";
import Juicy from "./components/Juicy.jsx";
import Cozy from "./components/Cozy";
import React from "react";

const data = {
  hot: {
    description:
      "Hot freshly ground black coffee or a cup of exquisite tea?... We give you that perfect cup every time.",
    items: [
      { name: "Mocha Latte", price: 7.5, className: "mocha" },
      { name: "Caffe Formaggio", price: 5.0, className: "formaggio" },
      { name: "Espresso", price: 3.5, className: "espresso" },
      { name: "Chai Verde Latte", price: 5.5, className: "chai" },
    ],
  },
  juicy: {
    description:
      "Ripe fruit - freshly squeezed. ... It's as simple as that. Chunky or smooth - it's your choice.",
    items: [
      { name: "Branched Apricots", price: 4.2, className: "apricot" },
      { name: "Deep Rasberries", price: 3.5, className: "rasberry" },
      { name: "Smooth Oranges", price: 6.5, className: "orange" },
    ],
  },
  cozy: {
    description:
      "Hang around. Enjoy the settings. ...Use our fast WiFi. Borrow a newspaper or a novel.",
    name: "",
    hours: (
      <React.Fragment>
        <span className="hours">Mon-Sun</span> <span> 8am – 11pm</span>
      </React.Fragment>
    ),
    address: (
      <React.Fragment>
        <span className="address">Caffe Retro </span> <span>Canto VI</span>
      </React.Fragment>
    ),
    phone: (
      <React.Fragment>
        <span className="phone"> 0123-45 67 89 </span>
        <span> caffe@lorem.pge </span>
      </React.Fragment>
    ),
  },
};

const App = () => {
  return (
    <div>
      <Menu />
      <div className="sections">
        <div id="hot" className="section">
          <Hot data={data.hot} />
        </div>
        <div id="juicy" className="section">
          <Juicy data={data.juicy} />
        </div>
        <div id="cozy" className="section">
          <Cozy data={data.cozy} />
        </div>
      </div>
    </div>
  );
};

export default App;
