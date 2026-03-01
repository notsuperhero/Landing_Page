import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import FormsSection from './components/FormsSection'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen bg-bg text-text-primary">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Dashboard />
                <FormsSection />
                <Pricing />
            </main>
            <Footer />
        </div>
    )
}
