import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './ContentInputPage.css';

/* ── Framer variants ── */
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
};

const panelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (d) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: d, ease: 'easeOut' },
    }),
};

export default function ContentInputPage() {
    const [timeValue, setTimeValue] = useState(45);
    const [skillLevel, setSkillLevel] = useState('ronin');
    const sparkRef = useRef(null);
    const navigate = useNavigate();

    /* GSAP floating sparks */
    useEffect(() => {
        const sparks = sparkRef.current?.querySelectorAll('.ci__spark');
        if (!sparks) return;
        sparks.forEach((s, i) => {
            gsap.fromTo(
                s,
                { opacity: 0, y: 0, scale: 0 },
                {
                    opacity: 0.7,
                    y: -35,
                    scale: 1,
                    duration: 2.5 + Math.random() * 2,
                    repeat: -1,
                    delay: i * 0.6,
                    ease: 'power1.out',
                    onRepeat: () => gsap.set(s, { opacity: 0, y: 0, scale: 0 }),
                }
            );
        });
    }, []);

    /* Clock display */
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

    return (
        <div className="ci-page" ref={sparkRef}>
            {/* ── Background ── */}
            <div className="ci__bg">
                <div className="ci__bg-grid"></div>
                <div className="ci__bg-clouds"></div>
                <div className="ci__bg-vignette-v"></div>
                <div className="ci__bg-vignette-h"></div>
                <div className="ci__bg-scanlines"></div>

                {/* Sparks */}
                <div className="ci__spark" style={{ left: '15%', top: '35%' }}></div>
                <div className="ci__spark" style={{ left: '70%', top: '25%' }}></div>
                <div className="ci__spark" style={{ left: '45%', top: '65%' }}></div>
                <div className="ci__spark" style={{ left: '85%', top: '55%' }}></div>
            </div>

            {/* ── Decorative Kanji ── */}
            <div className="ci__kanji ci__kanji--right">知恵</div>
            <div className="ci__kanji ci__kanji--left">未来</div>

            {/* ── Main container ── */}
            <div className="ci__container">
                {/* ═══ Header ═══ */}
                <motion.header
                    className="ci__header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="ci__header-left">
                        <span className="material-icons ci__header-dot">lens</span>
                        <div>
                            <h1 className="ci__header-logo">
                                LearnFlow AI <span className="ci__header-ver">SYS.V.2.0</span>
                            </h1>
                            <p className="ci__header-sub">Tactical Knowledge Interface</p>
                        </div>
                    </div>

                    <div className="ci__header-right">
                        <div className="ci__header-status">
                            <span>SYS_STATUS: <span className="ci__status-ok">OPTIMAL</span></span>
                            <span>NET_Latency: <span className="ci__status-lat">12ms</span></span>
                        </div>
                        <div className="ci__header-divider"></div>
                        <div className="ci__header-loc">
                            <span>LOC: <span className="ci__loc-val">TOKYO_NODE_04</span></span>
                            <span>TIME: <span className="ci__loc-val">{clock}</span></span>
                        </div>
                    </div>
                </motion.header>

                {/* ═══ Title ═══ */}
                <div className="ci__page-title">Source Data Ingestion</div>

                {/* ═══ Three Source Cards ═══ */}
                <div className="ci__sources-grid">
                    {/* Card 1 — YouTube */}
                    <motion.div
                        className="ci__card"
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ y: -6, borderColor: 'rgba(218,11,11,0.5)' }}
                    >
                        <div className="ci__card-tag">SOURCE_01 // VIDEO</div>
                        <div className="ci__card-top">
                            <div className="ci__card-icon-box">
                                <span className="material-icons">smart_display</span>
                            </div>
                            <span className="ci__card-id">ID: YT-X99</span>
                        </div>
                        <div className="ci__card-body">
                            <label className="ci__card-label">YouTube URL</label>
                            <div className="ci__input-row">
                                <input
                                    type="text"
                                    className="ci__input"
                                    placeholder="https://youtube.com/..."
                                />
                                <button className="ci__input-btn">
                                    <span className="material-icons">link</span>
                                </button>
                            </div>
                            <div className="ci__helper">
                                <span className="material-icons ci__helper-icon">info</span>
                                <span>Auto-extraction of transcripts enabled</span>
                            </div>
                        </div>
                        <div className="ci__card-status">INPUT_ACTIVE</div>
                        {/* Corner accents */}
                        <div className="ci__corner ci__corner--tl"></div>
                        <div className="ci__corner ci__corner--br"></div>
                    </motion.div>

                    {/* Card 2 — Documents */}
                    <motion.div
                        className="ci__card ci__card--offset"
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ y: -6, borderColor: 'rgba(218,11,11,0.5)' }}
                    >
                        <div className="ci__card-tag">SOURCE_02 // DOCS</div>
                        <div className="ci__card-top">
                            <div className="ci__card-icon-box">
                                <span className="material-icons">picture_as_pdf</span>
                            </div>
                            <span className="ci__card-id">ID: DOC-Z11</span>
                        </div>
                        <div className="ci__card-body">
                            <label className="ci__card-label">Upload Data</label>
                            <div className="ci__upload-zone">
                                <span className="material-icons ci__upload-icon">cloud_upload</span>
                                <p className="ci__upload-text">
                                    Drag & Drop or <span className="ci__upload-link">Select File</span>
                                </p>
                                <p className="ci__upload-formats">PDF, TXT, MD Supported</p>
                            </div>
                        </div>
                        <div className="ci__card-status">SCAN_READY</div>
                        <div className="ci__corner ci__corner--tl"></div>
                        <div className="ci__corner ci__corner--br"></div>
                    </motion.div>

                    {/* Card 3 — Raw Notes */}
                    <motion.div
                        className="ci__card"
                        custom={2}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ y: -6, borderColor: 'rgba(218,11,11,0.5)' }}
                    >
                        <div className="ci__card-tag">SOURCE_03 // RAW</div>
                        <div className="ci__card-top">
                            <div className="ci__card-icon-box">
                                <span className="material-icons">edit_note</span>
                            </div>
                            <span className="ci__card-id">ID: TXT-A01</span>
                        </div>
                        <div className="ci__card-body">
                            <label className="ci__card-label">Direct Input</label>
                            <textarea
                                className="ci__textarea"
                                placeholder="// Enter custom prompt or raw study notes here..."
                            ></textarea>
                        </div>
                        <div className="ci__card-status">TXT_BUFFER</div>
                        <div className="ci__corner ci__corner--tl"></div>
                        <div className="ci__corner ci__corner--br"></div>
                    </motion.div>
                </div>

                {/* ═══ Bottom Section ═══ */}
                <div className="ci__bottom">
                    {/* Gradient line decoration */}
                    <div className="ci__bottom-line"></div>

                    {/* Mission Parameters */}
                    <motion.div
                        className="ci__mission"
                        custom={0.85}
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="ci__mission-pulse"></div>
                        <h3 className="ci__mission-title">
                            <span className="material-icons ci__mission-icon">tune</span>
                            Mission Parameters
                        </h3>

                        <div className="ci__mission-controls">
                            {/* Time Slider */}
                            <div className="ci__time-section">
                                <div className="ci__time-header">
                                    <label className="ci__time-label">Time Allocation</label>
                                    <span className="ci__time-value">{timeValue} MIN</span>
                                </div>
                                <input
                                    type="range"
                                    className="ci__slider"
                                    min="15"
                                    max="120"
                                    step="15"
                                    value={timeValue}
                                    onChange={(e) => setTimeValue(Number(e.target.value))}
                                />
                                <div className="ci__time-range">
                                    <span>15m</span>
                                    <span>2h</span>
                                </div>
                            </div>

                            {/* Skill Level */}
                            <div className="ci__skill-section">
                                <label className="ci__time-label">Proficiency Level</label>
                                <div className="ci__skill-buttons">
                                    {['novice', 'ronin', 'master'].map((level) => (
                                        <button
                                            key={level}
                                            className={`ci__skill-btn ${skillLevel === level ? 'ci__skill-btn--active' : ''}`}
                                            onClick={() => setSkillLevel(level)}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Generate Path CTA */}
                    <motion.div
                        className="ci__generate-wrapper"
                        custom={1.05}
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.button
                            className="ci__generate"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => navigate('/dashboard')}
                        >
                            <div className="ci__generate-glow"></div>
                            <div className="ci__generate-pattern"></div>
                            <div className="ci__generate-content">
                                <div className="ci__generate-text">
                                    <span className="ci__generate-status">Status: Ready</span>
                                    <span className="ci__generate-label">Generate Path</span>
                                </div>
                                <span className="material-icons ci__generate-arrow">double_arrow</span>
                            </div>
                            <div className="ci__generate-progress"></div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
