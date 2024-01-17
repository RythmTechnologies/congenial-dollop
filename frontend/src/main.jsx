import React from 'react'
import ReactDOM from 'react-dom/client'

import "./assets/css/style.css"
import AppProvider from '@/providers/app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider />,
)
