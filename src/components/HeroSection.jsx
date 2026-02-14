import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './HeroSection.css';

// Framer Motion variants
const panelVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
};

const statusVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
        opacity: 0.8,
        scaleX: 1,
        transition: { duration: 0.6, delay: 0.8, ease: 'easeOut' },
    },
};

const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 1, ease: 'easeOut' },
    },
};

const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 1.3, ease: 'easeOut' },
    },
};

const ctaVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, delay: 1.6, ease: 'easeOut' },
    },
};

export default function HeroSection() {
    const orbRedRef = useRef(null);
    const orbGoldRef = useRef(null);
    const linesRef = useRef(null);
    const navigate = useNavigate();

    // GSAP parallax on mouse move for orbs + lines
    useEffect(() => {
        const handleMove = (e) => {
            const { innerWidth: w, innerHeight: h } = window;
            const mx = (e.clientX - w / 2) / w;
            const my = (e.clientY - h / 2) / h;

            gsap.to(orbRedRef.current, {
                x: mx * 40,
                y: my * 30,
                duration: 1.2,
                ease: 'power2.out',
            });
            gsap.to(orbGoldRef.current, {
                x: mx * -30,
                y: my * -25,
                duration: 1.4,
                ease: 'power2.out',
            });
            gsap.to(linesRef.current, {
                rotateZ: mx * 2,
                duration: 2,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    // GSAP pulse animation for corner brackets
    useEffect(() => {
        const corners = document.querySelectorAll('.hero__corner');
        gsap.fromTo(
            corners,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.4,
                stagger: 0.15,
                delay: 1.5,
                ease: 'power2.out',
            }
        );
    }, []);

    return (
        <section className="hero">
            {/* Background Layers */}
            <div className="hero__bg-base"></div>
            <div className="hero__bg-edo bg-edo-pattern"></div>

            {/* Gradient Orbs — GSAP parallax */}
            <div ref={orbRedRef} className="hero__orb hero__orb--red"></div>
            <div ref={orbGoldRef} className="hero__orb hero__orb--gold"></div>

            {/* Geometric Connector Lines */}
            <div ref={linesRef} className="hero__lines">
                <div className="hero__line hero__line--diag1"></div>
                <div className="hero__line hero__line--diag2"></div>
                <div className="hero__line hero__line--vert"></div>
            </div>

            {/* Main Content */}
            <div className="hero__content">
                {/* Floating Panel — Framer Motion */}
                <motion.div
                    className="hero__panel animate-float"
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Decorative Outer Frame */}
                    <div className="hero__panel-frame clip-corner-cut"></div>

                    {/* Corner Brackets */}
                    <div className="hero__corner hero__corner--tl"></div>
                    <div className="hero__corner hero__corner--tr"></div>
                    <div className="hero__corner hero__corner--bl"></div>
                    <div className="hero__corner hero__corner--br"></div>

                    {/* Side Tech Dots */}
                    <div className="hero__side-dots hero__side-dots--left">
                        <span></span><span></span><span></span>
                    </div>
                    <div className="hero__side-dots hero__side-dots--right">
                        <span></span><span></span><span></span>
                    </div>

                    {/* Inner Content */}
                    <div className="hero__panel-inner">
                        {/* Status Label */}
                        <motion.div
                            className="hero__status"
                            variants={statusVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="hero__status-line"></div>
                            <span className="hero__status-text">System Online</span>
                            <div className="hero__status-line"></div>
                        </motion.div>

                        <motion.h1
                            className="hero__title"
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            LEARNFLOW <span className="hero__title-accent">AI</span>
                        </motion.h1>

                        <motion.p
                            className="hero__subtitle"
                            variants={subtitleVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            Turn Knowledge Into{' '}
                            <span className="hero__subtitle-highlight">Skill Paths</span>
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            className="hero__cta-wrapper"
                            variants={ctaVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.button
                                className="hero__cta"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => navigate('/signup')}
                            >
                                <div className="hero__cta-glow"></div>
                                <div className="hero__cta-body clip-hex-button">
                                    <span>Generate Path</span>
                                    <span className="material-icons hero__cta-icon">bolt</span>
                                </div>
                                <div className="hero__cta-tick hero__cta-tick--top"></div>
                                <div className="hero__cta-tick hero__cta-tick--bottom"></div>
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Divider */}
            <div className="hero__divider"></div>
        </section>
    );
}
