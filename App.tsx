import React from 'react';
import {Router} from './src/router';
import {AppProvider} from './src/providers/context';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
