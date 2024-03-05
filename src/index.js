/* eslint-disable comma-dangle */
/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/prefer-query-selector */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'redux/store'

import 'bootstrap/dist/css/bootstrap.css'
import { App } from 'components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
