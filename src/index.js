import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { App } from 'components/app'
import { persistor, store } from 'redux/store'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={undefined} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  // </React.StrictMode>
  ,
)
