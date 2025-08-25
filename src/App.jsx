import { lazy, Suspense } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import SectionLoader from './components/SectionLoader';

// Lazy load heavy components
const About = lazy(() => import('./sections/About'));
const Projects = lazy(() => import('./sections/Projects'));
const Experiences = lazy(() => import('./sections/Experiences'));
const Personal = lazy(() => import('./sections/Personal'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero/>
      
      <Suspense fallback={<SectionLoader />}>
        <About/>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Projects/>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Experiences/>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Personal/>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Contact/>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer/>
      </Suspense>
    </div>
  )
}

export default App
