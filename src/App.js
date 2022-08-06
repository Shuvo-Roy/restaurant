import React from 'react';
import './App.css';
import MainComponent from './component/mainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from './redux/store';
function App() {
  //console.log("App.js:", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
