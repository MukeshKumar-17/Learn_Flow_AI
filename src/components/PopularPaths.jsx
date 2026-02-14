import { motion } from 'framer-motion';
import './PopularPaths.css';

const paths = [
    {
        category: 'Cybersecurity',
        title: 'Ethical Hacking 101',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=450&fit=crop',
    },
    {
        category: 'Data Science',
        title: 'Neural Networks',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=450&fit=crop',
    },
    {
        category: 'Design',
        title: 'Zen Minimalism',
        image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=600&h=450&fit=crop',
    },
    {
        category: 'Development',
        title: 'Rust Programming',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=450&fit=crop',
    },
];

const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const gridVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function PopularPaths() {
    return (
        <section id="paths" className="popular-paths">
            <div className="popular-paths__inner">
                {/* Header */}
                <motion.div
                    className="popular-paths__header"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div>
                        <h2 className="popular-paths__title">
                            Popular <span className="popular-paths__title-accent">Paths</span>
                        </h2>
                        <p className="popular-paths__subtitle">
                            Start learning immediately with pre-generated community paths.
                        </p>
                    </div>
                    <a href="#" className="popular-paths__view-all">
                        View All <span className="material-icons popular-paths__arrow">arrow_forward</span>
                    </a>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="popular-paths__grid"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {paths.map((p) => (
                        <motion.div
                            key={p.title}
                            className="path-card"
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                        >
                            <motion.img
                                src={p.image}
                                alt={p.title}
                                className="path-card__image"
                                loading="lazy"
                                whileHover={{ scale: 1.12 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className="path-card__overlay"></div>
                            <div className="path-card__info">
                                <span className="path-card__category">{p.category}</span>
                                <h3 className="path-card__title">{p.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
