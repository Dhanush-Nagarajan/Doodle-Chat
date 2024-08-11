import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { SocketContextProvider } from './context/SocketContext.jsx';
import { Provider } from 'react-redux';  // Import Redux Provider
import store from './store/store.js';    // Import the Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap your app with the Redux Provider */}
      <BrowserRouter>
        <AuthContextProvider>
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>   {/* Closing tag for Redux Provider */}
  </React.StrictMode>,
);
