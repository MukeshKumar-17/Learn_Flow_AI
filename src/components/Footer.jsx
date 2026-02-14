import { motion } from 'framer-motion';
import './Footer.css';

const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

export default function Footer() {
    return (
        <motion.footer
            className="footer"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="footer__inner">
                {/* Logo */}
                <div className="footer__brand">
                    <div className="footer__logo-icon">
                        <span className="material-icons">auto_awesome</span>
                    </div>
                    <span className="footer__logo-text">LearnFlow AI</span>
                </div>

                {/* Copyright */}
                <p className="footer__copy">
                    © {new Date().getFullYear()} LearnFlow AI. All rights reserved.
                </p>

                {/* Social */}
                <div className="footer__social">
                    <motion.a
                        href="#"
                        className="footer__social-link"
                        aria-label="Share"
                        whileHover={{ scale: 1.2, color: '#da0b0b' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                        <span className="material-icons">share</span>
                    </motion.a>
                    <motion.a
                        href="#"
                        className="footer__social-link"
                        aria-label="GitHub"
                        whileHover={{ scale: 1.2, color: '#da0b0b' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                        <span className="material-icons">code</span>
                    </motion.a>
                </div>
            </div>
        </motion.footer>
    );
}
