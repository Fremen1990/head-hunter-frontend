import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyles } from './GlobalStyles'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import 'animate.css/animate.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            className="toast"
         />
         <GlobalStyles />
         <App />
      </Provider>
   </React.StrictMode>
)
