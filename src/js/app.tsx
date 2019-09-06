import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Logo from './logo';

function App() {
  return (
    <Fragment>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Logo />
    </Fragment>

  );
}

export default App;