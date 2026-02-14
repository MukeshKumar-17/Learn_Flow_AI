import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const linksRef = useRef(null);
    const logoRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // GSAP staggered entrance for nav items
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Logo entrance
            gsap.fromTo(
                logoRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
            );

            // Stagger nav links
            const links = linksRef.current?.querySelectorAll('.navbar__link, .navbar__signin');
            if (links) {
                gsap.fromTo(
                    links,
                    { opacity: 0, y: -15 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        stagger: 0.1,
                        delay: 0.5,
                    }
                );
            }
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav ref={navRef} className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                {/* Logo */}
                <a href="#" className="navbar__logo" ref={logoRef}>
                    <div className="navbar__logo-icon">
                        <span className="material-icons">auto_awesome</span>
                    </div>
                    <span className="navbar__logo-text">LEARNFLOW AI</span>
                </a>

                {/* Desktop Links */}
                <div className="navbar__links" ref={linksRef}>
                    <a href="#features" className="navbar__link">Features</a>
                    <a href="#paths" className="navbar__link">Paths</a>
                    <a href="#" className="navbar__link">Docs</a>
                    <button className="navbar__signin" onClick={() => navigate('/signup')}>Sign In</button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="navbar__mobile-menu">
                    <a href="#features" className="navbar__link" onClick={() => setMenuOpen(false)}>Features</a>
                    <a href="#paths" className="navbar__link" onClick={() => setMenuOpen(false)}>Paths</a>
                    <a href="#" className="navbar__link" onClick={() => setMenuOpen(false)}>Docs</a>
                    <button className="navbar__signin" onClick={() => { setMenuOpen(false); navigate('/signup'); }}>Sign In</button>
                </div>
            )}
        </nav>
    );
}
