import Navbar from './components/Navbar';
import './App.css';
import HeroSection from './components/Hero';

const App = () => {
    return (
        <>
            {/*Header*/}
            <header>
                {/* Navigation */}
                <div className="navigation container">
                    <Navbar/>
                </div>

                {/* Hero Area */}
                <div className="hero-area container">
                    <HeroSection />
                </div>
            </header>
        </>
    )
}

export default App;