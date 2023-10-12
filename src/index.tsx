import React from 'react'
import ReactDOM from 'react-dom/client'
import { Amplify } from 'aws-amplify'

import 'shared/styles/root.scss'

import App from './app/App'
import awsExports from './aws-exports'

Amplify.configure(awsExports)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <App />
)