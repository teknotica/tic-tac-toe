import { Fragment } from 'react';
import TicTacToe from './components/TicTacToe';
import GlobalStyles from './components/GlobalStyles';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <TicTacToe />
  </Fragment>
);

export default App;
