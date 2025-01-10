import LandingPage from './LandingPage';
import Testimonials from './Testimonials';
import Projects from './Projects';

function Home() {
  const phoneNumber = "+923187248419";
  const message = "Hello! I'm interested in your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main>

      <LandingPage />
      <Testimonials />
      <Projects />










  {/* WhatsApp Icon */}
  <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 z-50 transition-transform transform hover:scale-110 duration-300 text-[10px]"
                aria-label="Contact on WhatsApp"
            >
                <img
                className='w-10'
                src="/chat.svg" alt="Chat Icon" />
                Let's Chat
            </a>
    </main>
  )
}

export default Home