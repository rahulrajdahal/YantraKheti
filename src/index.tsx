import { store } from "app/store";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import App from "./App";
import { GlobalStyles } from "./globalStyles";

render(
  <BrowserRouter>
    <ToastProvider>

      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </ToastProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
