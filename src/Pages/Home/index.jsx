import LandingPage from './LandingPage';
import Testimonials from './Testimonials';
import Projects from './Projects';
import BusinessesWeWorkedWith from './BusinessesWeWorkedWith';
import WhyChooseUs from './WhyChooseUs';
import OurProcess from './OurProcess';
import CTA from './CTA';

function Home() {


  return (
    <main>

      <LandingPage />
      <BusinessesWeWorkedWith />
      <Testimonials />
      <Projects />


      <div
        className='px-4 lg:px-28 lg:py-12'
      >
      </div>

      <WhyChooseUs />
      <OurProcess />
      <CTA />


      
    </main>
  )
}

export default Home