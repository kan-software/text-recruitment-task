import { Provider } from 'react-redux';
import './App.css';
import '@livechat/design-system-react-components/dist/style.css';
import { createStore } from 'redux';
import { CannedResponses } from './components/canned-responses/CannedResponses';
import { reducer } from './store/reducer';
import { initialState } from './initial-state';

function App() {
  const store = createStore(reducer, initialState);

  return (
    <>
      <Provider store={store}>
        <CannedResponses />
      </Provider>
    </>
  );
}

export default App;
