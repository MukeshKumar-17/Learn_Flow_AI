import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import ValueStatement from '../components/ValueStatement';
import PopularPaths from '../components/PopularPaths';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <ValueStatement />
            <PopularPaths />
            <FinalCTA />
            <Footer />
        </>
    );
}
