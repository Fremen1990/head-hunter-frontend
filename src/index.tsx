import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyles } from './GlobalStyles'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <GlobalStyles />
         <App />
         <ToastContainer />
      </Provider>
   </React.StrictMode>
)
