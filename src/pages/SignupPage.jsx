import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import './SignupPage.css';

// Framer Motion variants
const panelVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
};

const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.6 + i * 0.1, ease: 'easeOut' },
    }),
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 1.3, ease: 'easeOut' },
    },
};

export default function SignupPage() {
    const sparkContainerRef = useRef(null);

    // GSAP gold spark particles
    useEffect(() => {
        const container = sparkContainerRef.current;
        if (!container) return;

        const sparks = container.querySelectorAll('.signup__spark');
        sparks.forEach((spark, i) => {
            gsap.fromTo(
                spark,
                { opacity: 0, y: 0, scale: 0 },
                {
                    opacity: 0.7,
                    y: -60,
                    scale: 1,
                    duration: 3 + Math.random() * 2,
                    repeat: -1,
                    delay: i * 0.8,
                    ease: 'power1.out',
                    yoyo: false,
                    onRepeat: () => {
                        gsap.set(spark, { opacity: 0, y: 0, scale: 0 });
                    },
                }
            );
        });
    }, []);

    return (
        <div className="signup-page">
            {/* Background */}
            <div className="signup__bg" ref={sparkContainerRef}>
                <div className="signup__bg-clouds"></div>
                <div className="signup__bg-gradient"></div>
                <div className="signup__scanline"></div>

                {/* Gold sparks */}
                <div className="signup__spark" style={{ left: '15%', top: '40%' }}></div>
                <div className="signup__spark" style={{ left: '85%', top: '25%' }}></div>
                <div className="signup__spark" style={{ left: '35%', top: '75%' }}></div>
                <div className="signup__spark" style={{ left: '65%', top: '85%' }}></div>
                <div className="signup__spark" style={{ left: '50%', top: '10%' }}></div>
            </div>

            {/* Main Content */}
            <main className="signup__main">
                {/* Sacred Access Label */}
                <motion.div
                    className="signup__sacred-label"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.8, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                >
                    <div className="signup__sacred-line"></div>
                    <div className="signup__sacred-diamond"></div>
                    <span className="signup__sacred-text">Sacred Access</span>
                    <div className="signup__sacred-diamond"></div>
                    <div className="signup__sacred-line"></div>
                </motion.div>

                {/* Auth Panel */}
                <motion.div
                    className="signup__panel-wrapper"
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Outer corner brackets */}
                    <div className="signup__bracket signup__bracket--tl"></div>
                    <div className="signup__bracket signup__bracket--tr"></div>
                    <div className="signup__bracket signup__bracket--bl"></div>
                    <div className="signup__bracket signup__bracket--br"></div>

                    {/* Top/bottom gradient lines */}
                    <div className="signup__frame-line signup__frame-line--top"></div>
                    <div className="signup__frame-line signup__frame-line--bottom"></div>

                    {/* Inner panel */}
                    <div className="signup__panel">
                        <div className="signup__panel-texture"></div>

                        <div className="signup__panel-content">
                            {/* Icon */}
                            <div className="signup__icon-wrap">
                                <div className="signup__icon-border-outer"></div>
                                <div className="signup__icon-border-inner"></div>
                                <span className="material-icons signup__icon">auto_awesome</span>
                            </div>

                            {/* Title */}
                            <motion.h2
                                className="signup__title"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                Initiate
                            </motion.h2>
                            <motion.p
                                className="signup__subtitle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                            >
                                Join the Neural Lattice
                            </motion.p>

                            {/* Form */}
                            <form className="signup__form" onSubmit={(e) => e.preventDefault()}>
                                {/* Full Name */}
                                <motion.div
                                    className="signup__field-group"
                                    custom={0}
                                    variants={fieldVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <label className="signup__label" htmlFor="signup-name">
                                        Designation (Full Name)
                                    </label>
                                    <div className="signup__input-wrap">
                                        <span className="material-icons signup__input-icon">badge</span>
                                        <input
                                            id="signup-name"
                                            type="text"
                                            className="signup__input"
                                            placeholder="ENTER NAME"
                                        />
                                        <div className="signup__input-glow"></div>
                                    </div>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    className="signup__field-group"
                                    custom={1}
                                    variants={fieldVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <label className="signup__label" htmlFor="signup-email">
                                        Neural Link (Email)
                                    </label>
                                    <div className="signup__input-wrap">
                                        <span className="material-icons signup__input-icon">alternate_email</span>
                                        <input
                                            id="signup-email"
                                            type="email"
                                            className="signup__input"
                                            placeholder="ENTER EMAIL"
                                        />
                                        <div className="signup__input-glow"></div>
                                    </div>
                                </motion.div>

                                {/* Password */}
                                <motion.div
                                    className="signup__field-group"
                                    custom={2}
                                    variants={fieldVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <label className="signup__label" htmlFor="signup-password">
                                        Cipher Key (Password)
                                    </label>
                                    <div className="signup__input-wrap">
                                        <span className="material-icons signup__input-icon">vpn_key</span>
                                        <input
                                            id="signup-password"
                                            type="password"
                                            className="signup__input"
                                            placeholder="••••••••"
                                        />
                                        <div className="signup__input-glow"></div>
                                    </div>
                                </motion.div>

                                {/* Confirm Password */}
                                <motion.div
                                    className="signup__field-group"
                                    custom={3}
                                    variants={fieldVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <label className="signup__label" htmlFor="signup-confirm">
                                        Confirm Cipher Key
                                    </label>
                                    <div className="signup__input-wrap">
                                        <span className="material-icons signup__input-icon">lock</span>
                                        <input
                                            id="signup-confirm"
                                            type="password"
                                            className="signup__input"
                                            placeholder="••••••••"
                                        />
                                        <div className="signup__input-glow"></div>
                                    </div>
                                </motion.div>

                                {/* Skill Level Dropdown */}
                                <motion.div
                                    className="signup__field-group"
                                    custom={4}
                                    variants={fieldVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <label className="signup__label" htmlFor="signup-skill">
                                        Resonance Level
                                    </label>
                                    <div className="signup__input-wrap signup__select-wrap">
                                        <select id="signup-skill" className="signup__select" defaultValue="">
                                            <option value="" disabled>
                                                SELECT PROFICIENCY
                                            </option>
                                            <option value="initiate">Initiate (Beginner)</option>
                                            <option value="adept">Adept (Intermediate)</option>
                                            <option value="sage">Sage (Advanced)</option>
                                        </select>
                                        <span className="material-icons signup__select-arrow">expand_more</span>
                                        <div className="signup__input-glow"></div>
                                    </div>
                                </motion.div>

                                {/* Spacer */}
                                <div style={{ height: '1rem' }}></div>

                                {/* Submit Button */}
                                <motion.div
                                    className="signup__button-wrap"
                                    variants={buttonVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.button
                                        type="button"
                                        className="signup__button"
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                    >
                                        <div className="signup__button-glow"></div>
                                        <div className="signup__button-bg"></div>
                                        <div className="signup__button-shine"></div>
                                        <div className="signup__button-content">
                                            <span>Establish Link</span>
                                            <span className="material-icons signup__button-icon">arrow_forward</span>
                                        </div>
                                    </motion.button>
                                </motion.div>
                            </form>

                            {/* Switch to Login */}
                            <motion.div
                                className="signup__switch"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                            >
                                <span className="signup__switch-label">Already Connected?</span>
                                <Link to="/login" className="signup__switch-link">
                                    Log In Sequence
                                </Link>
                            </motion.div>
                        </div>

                        {/* Kanji decorations */}
                        <div className="signup__kanji signup__kanji--tr">知</div>
                        <div className="signup__kanji signup__kanji--bl">流</div>
                    </div>
                </motion.div>
            </main>

            {/* Bottom status bar */}
            <footer className="signup__footer">
                <div className="signup__footer-status">
                    <div className="signup__footer-dot"></div>
                    <span>System Nominal</span>
                </div>
                <div className="signup__footer-version">V 1.0 // SPIRITUAL-UI</div>
            </footer>
        </div>
    );
}
