import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { Toaster } from 'react-hot-toast'
import './index.css'

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Redux/Reducers/reducer.js'

import App from './App.jsx'
import Navbar from '../src/Components/Util/Navbar.jsx'
import Notification from './Components/Util/Notification.jsx'

const Store = configureStore({
    reducer : rootReducer
})


createRoot(document.getElementById('root')).render(
    <div className='bg-gradient-to-tr from-slate-800 to-slate-950 text-white'>
        <Provider store={Store}>
            <BrowserRouter >
                <Toaster />
                <Notification message={'This is test notification'} />
                <Navbar />
                <App />
            </BrowserRouter>
        </Provider>
    </div>
)
