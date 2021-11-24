import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { ThemeProvider } from "styled-components";

import { ResetStyles } from "./common/ResetStyles";
import { GlobalStyles } from "./common/GlobalStyles";
import { Theme } from "./common/Theme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <ResetStyles />
            <GlobalStyles />

            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
