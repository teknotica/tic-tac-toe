import { Fragment } from "react";

import CreditHeader from "./components/CreditHeader";
import GlobalStyles from "./components/GlobalStyles";
import TicTacToe from "./components/TicTacToe";

const App = () => (
  <Fragment>
    <GlobalStyles />
    <CreditHeader />
    <TicTacToe />
  </Fragment>
);

export default App;
