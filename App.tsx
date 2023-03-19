import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import Router from './src/routes/Router';
import {store} from './src/state/store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
