import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {Provider} from 'react-redux'
import CounterApp from './CounterApp.tsx'
import {store} from './store.ts'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    `  <CounterApp />
    </Provider>
  </StrictMode>,
)
