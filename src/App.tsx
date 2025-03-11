import React, { useEffect } from 'react'
import { useSpaceStore } from './store/useSpaceStore'
import Header from './components/Header'
import SpaceList from './components/SpaceList'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'
import coworking from "./assets/coworking.svg"
import { spacesData } from './data/spaces'

const App: React.FC = () => {
  const setSpaces = useSpaceStore((state) => state.setSpaces)

  useEffect(() => {
    console.log("space",spacesData)
    setSpaces(spacesData);
  }, [setSpaces])

  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
        </header>
        <div className="header-content">
            <div className="text-content">
                <h1>
                    Host your meeting with<br />
                    world-class amenities.<br />
                    <span className="price-highlight">Starting at ₹199/-!</span>
                </h1>
            </div>
            <img src={coworking} alt="Coworking space illustration" />
        </div>
        <Features />
        <section className="spaces-section">
          <h2>Our Space Overview</h2>
          <SpaceList />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
