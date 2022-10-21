import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import store from "./store";
import GlobalStyle from "./components/GlobalStyle";
import LightTheme from "./components/Themes/light";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);
