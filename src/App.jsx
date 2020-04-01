import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Cards from './Pages/Cards/Cards.jsx';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#025dd4',
    },
  },
});

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Cards} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
