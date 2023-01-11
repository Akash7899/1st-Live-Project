import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../src/assets/vendor/aos/aos.css";
// import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendor/boxicons/css/boxicons.min.css";
import "../src/assets/vendor/glightbox/css/glightbox.min.css";
import "../src/assets/vendor/swiper/swiper-bundle.min.css";
import "../src/assets/css/style.css";
import "../node_modules/aos/dist/aos.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
