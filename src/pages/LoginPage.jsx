import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './LoginPage.css';

/* ── Framer Motion variants ── */
const panelVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
    },
};

const fieldVariants = {
    hidden: { opacity: 0, x: -18 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, delay: 0.55 + i * 0.12, ease: 'easeOut' },
    }),
};

const btnVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 1.0, ease: 'easeOut' },
    },
};

export default function LoginPage() {
    const sparkContainerRef = useRef(null);

    /* GSAP red sparks */
    useEffect(() => {
        const sparks = sparkContainerRef.current?.querySelectorAll('.login__spark');
        if (!sparks) return;

        sparks.forEach((s, i) => {
            gsap.fromTo(
                s,
                { opacity: 0, y: 0, scale: 0 },
                {
                    opacity: 0.8,
                    y: -40,
                    scale: 1,
                    duration: 2.5 + Math.random() * 2,
                    repeat: -1,
                    delay: i * 0.7,
                    ease: 'power1.out',
                    onRepeat: () => gsap.set(s, { opacity: 0, y: 0, scale: 0 }),
                }
            );
        });
    }, []);

    return (
        <div className="login-page">
            {/* ── Background ── */}
            <div className="login__bg" ref={sparkContainerRef}>
                <div className="login__bg-clouds"></div>
                <div className="login__bg-grid"></div>
                <div className="login__bg-vignette-v"></div>
                <div className="login__bg-vignette-h"></div>
                <div className="login__scanline"></div>

                {/* Red data sparks */}
                <div className="login__spark" style={{ left: '10%', top: '40%' }}></div>
                <div className="login__spark" style={{ left: '80%', top: '20%' }}></div>
                <div className="login__spark" style={{ left: '30%', top: '70%' }}></div>
                <div className="login__spark" style={{ left: '60%', top: '80%' }}></div>
                <div className="login__spark" style={{ left: '90%', top: '50%' }}></div>
            </div>

            {/* ── Top Status Bar ── */}
            <header className="login__header">
                <div className="login__header-status">
                    <span className="login__header-dot"></span>
                    <span>System Secure // Net-02</span>
                </div>
                <div className="login__header-coord">LAT: 35.6762 N // LON: 139.6503 E</div>
            </header>

            {/* ── Main Card ── */}
            <main className="login__main">
                <motion.div
                    className="login__card-wrapper"
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Corner brackets (expand on hover via CSS) */}
                    <div className="login__bracket login__bracket--tl"></div>
                    <div className="login__bracket login__bracket--tr"></div>
                    <div className="login__bracket login__bracket--bl"></div>
                    <div className="login__bracket login__bracket--br"></div>

                    {/* Outer tactical shell */}
                    <div className="login__card-outer">
                        {/* Inner pane */}
                        <div className="login__card">
                            {/* Decorative side scanlines */}
                            <div className="login__side-mark login__side-mark--tr"></div>
                            <div className="login__side-mark login__side-mark--bl"></div>

                            {/* Header */}
                            <div className="login__card-header">
                                <motion.div
                                    className="login__icon-box"
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
                                >
                                    <span className="material-icons">fingerprint</span>
                                </motion.div>

                                <motion.h1
                                    className="login__title"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.65, duration: 0.5 }}
                                >
                                    Authenticate
                                </motion.h1>
                                <motion.p
                                    className="login__subtitle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.85, duration: 0.4 }}
                                >
                                    LearnFlow AI Access Terminal
                                </motion.p>
                            </div>

                            {/* ── Form ── */}
                            <form className="login__form" onSubmit={(e) => e.preventDefault()}>
                                {/* Email */}
                                <motion.div
                                    className="login__field"
                                    custom={0}
                                    variants={fieldVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <label className="login__label" htmlFor="login-email">
                                        Identity Code (Email)
                                    </label>
                                    <div className="login__input-wrap">
                                        <span className="material-icons login__input-icon">alternate_email</span>
                                        <input
                                            id="login-email"
                                            type="email"
                                            className="login__input login__input--tl"
                                            placeholder="OPERATOR ID"
                                        />
                                        <div className="login__input-corner login__input-corner--tr"></div>
                                        <div className="login__input-corner login__input-corner--bl"></div>
                                    </div>
                                </motion.div>

                                {/* Password */}
                                <motion.div
                                    className="login__field"
                                    custom={1}
                                    variants={fieldVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <label className="login__label" htmlFor="login-pass">
                                        Passphrase
                                    </label>
                                    <div className="login__input-wrap">
                                        <span className="material-icons login__input-icon">key</span>
                                        <input
                                            id="login-pass"
                                            type="password"
                                            className="login__input login__input--br"
                                            placeholder="••••••••••••"
                                        />
                                        <div className="login__input-corner login__input-corner--tl"></div>
                                        <div className="login__input-corner login__input-corner--br"></div>
                                    </div>
                                    <div className="login__forgot-row">
                                        <a href="#" className="login__forgot-link">
                                            Reset Credentials →
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Submit */}
                                <motion.div variants={btnVariants} initial="hidden" animate="visible">
                                    <motion.button
                                        type="button"
                                        className="login__submit"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.96 }}
                                    >
                                        <div className="login__submit-bg"></div>
                                        <div className="login__submit-sweep"></div>
                                        <div className="login__submit-content">
                                            <span>Initiate Session</span>
                                            <span className="material-icons login__submit-icon">login</span>
                                        </div>
                                    </motion.button>
                                </motion.div>
                            </form>

                            {/* Divider */}
                            <div className="login__divider">
                                <div className="login__divider-line"></div>
                                <div className="login__divider-center">
                                    <span className="login__divider-dot"></span>
                                    <span className="login__divider-text">Or Link Via</span>
                                    <span className="login__divider-dot"></span>
                                </div>
                                <div className="login__divider-line"></div>
                            </div>

                            {/* Google Login */}
                            <motion.button
                                type="button"
                                className="login__google"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.4 }}
                                whileHover={{ borderColor: 'rgba(255,255,255,0.5)', backgroundColor: 'rgba(255,255,255,0.04)' }}
                            >
                                <svg className="login__google-icon" viewBox="0 0 24 24" width="20" height="20">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <span className="login__google-text">Google Neural Link</span>
                            </motion.button>

                            {/* Switch to signup */}
                            <motion.div
                                className="login__switch"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4, duration: 0.4 }}
                            >
                                <span className="login__switch-label">New Operator?</span>
                                <Link to="/signup" className="login__switch-link">
                                    Create Account →
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom system info */}
                    <div className="login__meta">
                        <span className="login__meta-ver">VER 2.4.9-TAC</span>
                        <div className="login__meta-links">
                            <a href="#">Privacy Protocol</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* ── Bottom Footer ── */}
            <footer className="login__footer">
                <div className="login__footer-inner">
                    <div className="login__footer-bars">
                        <div className="login__footer-bar login__footer-bar--lg"></div>
                        <div className="login__footer-bar login__footer-bar--sm"></div>
                    </div>
                    <span className="login__footer-text">Secure Connection Established</span>
                </div>
            </footer>
        </div>
    );
}
