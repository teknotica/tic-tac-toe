import { Fragment } from "react";

import GlobalStyles from "./components/GlobalStyles";
import TicTacToe from "./components/TicTacToe";

const App = () => (
  <Fragment>
    <GlobalStyles />
    <TicTacToe />
  </Fragment>
);

export default App;
