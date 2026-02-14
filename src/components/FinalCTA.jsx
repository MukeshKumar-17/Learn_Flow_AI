import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './FinalCTA.css';

const panelVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function FinalCTA() {
    const navigate = useNavigate();

    return (
        <section className="final-cta">
            <div className="final-cta__inner">
                <motion.div
                    className="final-cta__panel"
                    variants={panelVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {/* Frame decorations */}
                    <div className="final-cta__frame-line final-cta__frame-line--top"></div>
                    <div className="final-cta__frame-line final-cta__frame-line--bottom"></div>

                    <motion.p
                        className="final-cta__text"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                    >
                        Start your learning journey
                    </motion.p>

                    <motion.button
                        className="final-cta__button"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                        whileHover={{
                            scale: 1.08,
                            boxShadow: '0 0 30px -5px rgba(218, 11, 11, 0.6)',
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/signup')}
                    >
                        <div className="final-cta__button-glow"></div>
                        <span className="final-cta__button-label">Create Your Path</span>
                        <span className="material-icons final-cta__button-icon">arrow_forward</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
