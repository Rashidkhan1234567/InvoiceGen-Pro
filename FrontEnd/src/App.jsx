import React from 'react'
import Router from './config/Router'
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Router/>
      <Analytics />
    </>
  )
}

export default App