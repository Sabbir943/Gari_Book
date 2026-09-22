
import './App.css'
import Navbar from './component/Header/NavBar'
import Hero from './component/Hero/Hero'
import JourneySteps from './component/JourneySteps/JourneySteps'
import PromoSection from './component/PromoSection/PromoSection'
import Services from './component/Services/Services'
import Stats from './component/Stats/Stats'
import UseCases from './component/UseCases/UseCases'

function App() {
 

  return (
    <>
     
    <div className="min-h-screen bg-gray-50">
      {/* Header / Navbar */}
      <Navbar />

      {/* Main Content Area */}
    <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <PromoSection/>
        <JourneySteps />
        <UseCases />
        {/* Upcoming sections: <Stats />, <Services />, etc. */}
      </main>

      {/* Footer will go here */}
    </div>
     

     

     
    </>
  )
}

export default App
