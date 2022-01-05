import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { GlobalStyles } from "./globalStyles";

render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
