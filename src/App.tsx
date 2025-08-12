import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import IntroScreen from './IntroScreen'
import Landing from './components/Landing'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
    <div>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
        <main className={`${showIntro ? 'overflow-hidden h-screen' : ''}`}>
          <Header />
          <Landing />
        </main>
    </div>
    </>
  )
}

export default App
