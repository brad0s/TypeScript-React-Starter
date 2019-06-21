import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './containers/Hello';
import StatefulHello from './components/StatefulHello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { EnthusiasmAction } from './actions/index';

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

ReactDOM.render(
  //<App />,
  //<Hello name="Typescript" enthusiasmLevel={10} />,
  <Provider store={store}>
    <Hello />
  </Provider>,
  // <StatefulHello name ="TypeScript"></StatefulHello>,
  document.getElementById('root') as HTMLElement //Type Assertion (cast)
);
registerServiceWorker();

//Type Assertion: we are condident we will find the getElementById so we tell it it is of type HTMLElement