import { motion } from 'framer-motion';
import './FeatureSection.css';

const features = [
    {
        icon: 'cloud_upload',
        title: 'Upload Content',
        text: 'Drag & drop your documents or paste URLs. Our system ingests ancient wisdom and modern data alike.',
    },
    {
        icon: 'hub',
        title: 'AI Builds Skill Path',
        text: 'The neural engine structures chaos into a linear, mastered skill tree tailored for your goals.',
    },
    {
        icon: 'insights',
        title: 'Execute & Track',
        text: 'Monitor your mastery level with granular analytics and visual progress indicators.',
    },
];

// Container staggers children
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function FeatureSection() {
    return (
        <section id="features" className="features">
            {/* Subtle connector lines behind cards */}
            <div className="features__connector-lines">
                <div className="features__connector-h"></div>
            </div>

            <div className="features__inner">
                <motion.div
                    className="features__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            className="feature-card"
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            {/* Top accent line */}
                            <div className="feature-card__accent-top"></div>

                            {/* Hover overlay */}
                            <div className="feature-card__hover-overlay"></div>

                            <div className="feature-card__content">
                                <motion.div
                                    className="feature-card__icon-wrap"
                                    whileHover={{ rotate: 8, scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                >
                                    <span className="material-icons feature-card__icon">{f.icon}</span>
                                </motion.div>
                                <h3 className="feature-card__title">{f.title}</h3>
                                <p className="feature-card__text">{f.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
