
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Footer from './component/Footer/Footer'
import Navbar from './component/Header/NavBar'
import Hero from './component/Hero/Hero'
import JourneySteps from './component/JourneySteps/JourneySteps'
import AppPromo from './component/PromoSection/AppPromo'
import DriverPromo from './component/PromoSection/DriverPromo'
import PromoSection from './component/PromoSection/PromoSection'
import Services from './component/Services/Services'
import Stats from './component/Stats/Stats'
import Testimonials from './component/Testimonials/Testimonials'
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
        <AppPromo />
        <DriverPromo/>
        <Testimonials />
        <Blogs />
        {/* Upcoming sections: <Stats />, <Services />, etc. */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
     

     

     
    </>
  )
}

export default App
