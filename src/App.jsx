
import './App.css'
import Navbar from './component/Header/NavBar'
import Hero from './component/Hero/Hero'

function App() {
 

  return (
    <>
     
    <div className="min-h-screen bg-gray-50">
      {/* Header / Navbar */}
      <Navbar />

      {/* Main Content Area */}
    <main className="flex-grow">
        <Hero />
        {/* Upcoming sections: <Stats />, <Services />, etc. */}
      </main>

      {/* Footer will go here */}
    </div>
     

     

     
    </>
  )
}

export default App
