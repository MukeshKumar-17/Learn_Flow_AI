import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './DashboardPage.css';

/* ── Variants ── */
const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] } },
});

export default function DashboardPage() {
    /* Live clock */
    const [clock, setClock] = useState('');
    useEffect(() => {
        const tick = () => {
            const d = new Date();
            setClock(
                `${String(d.getUTCHours()).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')}:${String(d.getUTCSeconds()).padStart(2, '0')} UTC`
            );
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    /* Active sidebar item */
    const [activeNav, setActiveNav] = useState('school');

    const navItems = [
        { icon: 'dashboard', label: 'Dashboard' },
        { icon: 'hub', label: 'Neural Map' },
        { icon: 'school', label: 'Knowledge Base' },
        { icon: 'leaderboard', label: 'Analytics' },
    ];

    return (
        <div className="dash">
            {/* ── Background ── */}
            <div className="dash__bg">
                <div className="dash__bg-grid"></div>
                <div className="dash__bg-clouds"></div>
                <div className="dash__bg-vignette"></div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="dash__sidebar">
                <div className="dash__sidebar-logo">
                    <span className="material-icons">all_inclusive</span>
                </div>

                <nav className="dash__sidebar-nav">
                    {navItems.map((item) => (
                        <button
                            key={item.icon}
                            className={`dash__nav-item ${activeNav === item.icon ? 'dash__nav-item--active' : ''}`}
                            onClick={() => setActiveNav(item.icon)}
                            title={item.label}
                        >
                            <div className="dash__nav-indicator"></div>
                            <span className="material-icons">{item.icon}</span>
                        </button>
                    ))}
                </nav>

                <div className="dash__sidebar-bottom">
                    <button className="dash__nav-item" title="Settings">
                        <span className="material-icons">settings</span>
                    </button>
                    <div className="dash__sidebar-avatar">
                        <span className="material-icons">person</span>
                    </div>
                </div>
            </aside>

            {/* ── Main ── */}
            <main className="dash__main">
                {/* Header HUD */}
                <header className="dash__header">
                    <div className="dash__header-left">
                        <div className="dash__header-ver">SYS.VER.4.02</div>
                        <h1 className="dash__header-title">Tactical Overview</h1>
                    </div>
                    <div className="dash__header-right">
                        <div className="dash__header-stat">
                            <span className="dash__stat-label">Neural Latency</span>
                            <span className="dash__stat-value dash__stat-value--red">12ms</span>
                        </div>
                        <div className="dash__header-stat">
                            <span className="dash__stat-label">Sync Rate</span>
                            <span className="dash__stat-value">98.4%</span>
                        </div>
                        <div className="dash__header-stat">
                            <span className="dash__stat-label">Time</span>
                            <span className="dash__stat-value">{clock}</span>
                        </div>
                        <motion.button
                            className="dash__boost-btn"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(249,6,6,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="material-icons">bolt</span> Boost
                        </motion.button>
                    </div>
                </header>

                {/* Content Grid */}
                <div className="dash__content">
                    <div className="dash__grid">
                        {/* ═══ Left Column ═══ */}
                        <div className="dash__left">
                            {/* Featured Card */}
                            <motion.div
                                className="dash__featured"
                                variants={fadeUp(0.15)}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ borderColor: 'rgba(249,6,6,0.7)', boxShadow: '0 0 15px rgba(249,6,6,0.3)' }}
                            >
                                <div className="dash__featured-badge">Active Node</div>
                                <div className="dash__featured-inner">
                                    {/* Image placeholder */}
                                    <div className="dash__featured-img">
                                        <div className="dash__featured-img-inner">
                                            <span className="material-icons dash__featured-img-icon">settings_suggest</span>
                                            <span className="dash__featured-img-label">COURSE</span>
                                        </div>
                                        <div className="dash__img-corner dash__img-corner--tl"></div>
                                        <div className="dash__img-corner dash__img-corner--br"></div>
                                    </div>
                                    {/* Text */}
                                    <div className="dash__featured-content">
                                        <div>
                                            <h2 className="dash__featured-title">Neural Architecture 101</h2>
                                            <p className="dash__featured-desc">
                                                Understanding the foundational pathways of synthetic intelligence.
                                                Analyze node weights and bias configurations in a controlled void environment.
                                            </p>
                                            <div className="dash__featured-tags">
                                                <span className="dash__tag">Core</span>
                                                <span className="dash__tag">Level 4</span>
                                                <span className="dash__tag">30m left</span>
                                            </div>
                                        </div>
                                        <div className="dash__progress-section">
                                            <div className="dash__progress-header">
                                                <span>Completion</span>
                                                <span>72%</span>
                                            </div>
                                            <div className="dash__progress-bar">
                                                <motion.div
                                                    className="dash__progress-fill"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '72%' }}
                                                    transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                                                ></motion.div>
                                                <div className="dash__progress-pulse"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Secondary Cards Row */}
                            <div className="dash__secondary-row">
                                {/* Card: Pattern Rec */}
                                <motion.div
                                    className="dash__sec-card"
                                    variants={fadeUp(0.35)}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{ borderColor: 'rgba(249,6,6,0.6)', y: -4 }}
                                >
                                    <div className="dash__sec-badge">Pending</div>
                                    <div className="dash__sec-top">
                                        <span className="material-icons dash__sec-icon">psychology</span>
                                        <h3 className="dash__sec-title">Pattern Rec.</h3>
                                    </div>
                                    <p className="dash__sec-desc">Advanced algorithm detection methods for unstructured data sets.</p>
                                    <div className="dash__sec-progress">
                                        <span className="dash__sec-pct">04%</span>
                                        <div className="dash__sec-bar">
                                            <div className="dash__progress-pulse"></div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Card: Logic Gates */}
                                <motion.div
                                    className="dash__sec-card"
                                    variants={fadeUp(0.5)}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{ borderColor: 'rgba(249,6,6,0.6)', y: -4 }}
                                >
                                    <div className="dash__sec-badge dash__sec-badge--complete">Complete</div>
                                    <div className="dash__sec-top">
                                        <span className="material-icons dash__sec-icon">memory</span>
                                        <h3 className="dash__sec-title">Logic Gates</h3>
                                    </div>
                                    <p className="dash__sec-desc">Boolean algebra fundamentals applied to modern quantum computing.</p>
                                    <div className="dash__sec-progress">
                                        <span className="dash__sec-pct">100%</span>
                                        <div className="dash__sec-bar dash__sec-bar--full"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* ═══ Right Column ═══ */}
                        <div className="dash__right">
                            {/* Operator Stats */}
                            <motion.div
                                className="dash__stats"
                                variants={fadeUp(0.25)}
                                initial="hidden"
                                animate="visible"
                            >
                                <h3 className="dash__panel-title">Operator Stats</h3>
                                <div className="dash__radar">
                                    <div className="dash__radar-ring dash__radar-ring--outer"></div>
                                    <div className="dash__radar-ring dash__radar-ring--inner"></div>
                                    <div className="dash__radar-sweep"></div>
                                    <div className="dash__radar-text">Analysis: OPTIMAL</div>
                                </div>
                                <div className="dash__stats-grid">
                                    <div className="dash__stat-box">
                                        <div className="dash__stat-box-label">XP Gain</div>
                                        <div className="dash__stat-box-value">+2.4k</div>
                                    </div>
                                    <div className="dash__stat-box">
                                        <div className="dash__stat-box-label">Rank</div>
                                        <div className="dash__stat-box-value">S-04</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Trajectory */}
                            <motion.div
                                className="dash__trajectory"
                                variants={fadeUp(0.45)}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="dash__traj-header">
                                    <h3 className="dash__panel-title">Trajectory</h3>
                                    <span className="material-icons dash__traj-icon">timeline</span>
                                </div>
                                <ul className="dash__traj-list">
                                    <li className="dash__traj-item">
                                        <div className="dash__traj-dot dash__traj-dot--filled"></div>
                                        <div>
                                            <h4 className="dash__traj-name">Advanced Cybernetics</h4>
                                            <span className="dash__traj-meta">Locked • Lvl 10 Req</span>
                                        </div>
                                    </li>
                                    <li className="dash__traj-item dash__traj-item--dim">
                                        <div className="dash__traj-dot dash__traj-dot--ring"></div>
                                        <div>
                                            <h4 className="dash__traj-name">Ethical AI Constraints</h4>
                                            <span className="dash__traj-meta">Locked • Lvl 12 Req</span>
                                        </div>
                                    </li>
                                    <li className="dash__traj-item dash__traj-item--faded">
                                        <div className="dash__traj-dot dash__traj-dot--gray"></div>
                                        <div>
                                            <h4 className="dash__traj-name">Void Protocol</h4>
                                            <span className="dash__traj-meta">Unknown</span>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>

            {/* ── Bottom overlay info ── */}
            <div className="dash__overlay-info">
                <span>GRID: ACTIVE</span>
                <span>COORD: 34.22.91</span>
                <span>SECURE CONNECTION</span>
            </div>
        </div>
    );
}
