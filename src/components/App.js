import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import World from "../components/world";
import Controls from "../components/controls";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b34f0b"
    },
    secondary: {
      main: "#323228"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <World />
        <Controls />
      </div>
    </ThemeProvider>
  );
}

export default App;
