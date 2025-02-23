import { useState } from 'react'
import './App.css'
import FirstComponent from './components/firstComponent'

import TemplateExpression from './components/TemplateExpression'

import Events from './components/Events'

function App() {
  return (
    <>
      <div className='App'>
        <h1>Fundmentos do react</h1>
      </div>
      <FirstComponent />
      <TemplateExpression />
      <Events />
    </>
  )
}

export default App
