import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ValueStatement.css';

gsap.registerPlugin(ScrollTrigger);

export default function ValueStatement() {
    const textRef = useRef(null);
    const panelRef = useRef(null);

    // GSAP scroll-triggered text character reveal
    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        const text = el.textContent;
        el.innerHTML = '';

        // Wrap each character in a span
        [...text].forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(12px)';
            el.appendChild(span);
        });

        const chars = el.querySelectorAll('span');

        gsap.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.04,
            stagger: 0.025,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: panelRef.current,
                start: 'top 80%',
                once: true,
            },
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <section className="value-statement">
            <div className="value-statement__inner">
                <motion.div
                    ref={panelRef}
                    className="value-statement__panel"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Corner decorations */}
                    <div className="value-statement__corner value-statement__corner--tl"></div>
                    <div className="value-statement__corner value-statement__corner--br"></div>

                    <p className="value-statement__text" ref={textRef}>
                        From raw information to real skills.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
