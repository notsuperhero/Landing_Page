import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AISection from './components/AISection'
import Modules from './components/Modules'
import Dashboard from './components/Dashboard'
import FormsSection from './components/FormsSection'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen bg-dark-bg text-text-primary">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <AISection />
                <Dashboard />
                <Modules />
                <FormsSection />
                <Pricing />
            </main>
            <Footer />
        </div>
    )
}
