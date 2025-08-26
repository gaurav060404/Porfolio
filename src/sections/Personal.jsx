import { PixelImage } from "../components/PixelImage";
import { animate, motion } from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";

// Motion variants defined once to avoid creating new objects each render
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3, ease: 'easeOut' } }
};

const rightVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.2, delay: 0.4, ease: 'easeOut' } }
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }
};

function Personal() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    // Responsive grid for PixelImage to reduce pieces on small screens
    const [customGrid, setCustomGrid] = useState({ rows: 8, cols: 8 });

    // Compute animation timings based on grid size to reduce work on small screens
    const computedTimings = useMemo(() => {
        const total = (customGrid?.rows || 8) * (customGrid?.cols || 8);
        if (total <= 16) return { pixelFadeInDuration: 400, maxAnimationDelay: 300 };
        if (total <= 36) return { pixelFadeInDuration: 600, maxAnimationDelay: 700 };
        return { pixelFadeInDuration: 800, maxAnimationDelay: 1200 };
    }, [customGrid]);

    useEffect(() => {
        // Set initial grid based on viewport and update on resize (debounced)
        const updateGrid = () => {
            const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
            // Tailwind breakpoints: sm = 640, md = 768, lg = 1024
            if (w < 640) {
                setCustomGrid({ rows: 4, cols: 4 });
            } else if (w < 1024) {
                setCustomGrid({ rows: 6, cols: 6 });
            } else {
                setCustomGrid({ rows: 8, cols: 8 });
            }
        };

        updateGrid();
        let t = null;
        const onResize = () => {
            clearTimeout(t);
            t = setTimeout(updateGrid, 150);
        };
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            clearTimeout(t);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 30% of the section is visible
                rootMargin: "0px 0px -100px 0px" // Trigger slightly before fully in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current || !isInView) return;

        // Create floating animation only when in view
        const floatAnimation = animate(
            containerRef.current,
            { y: ["0px", "-15px", "0px"] },
            {
                duration: 6,
                easing: "ease-in-out",
                repeat: Infinity,
            }
        );

        return () => {
            if (floatAnimation) floatAnimation.cancel();
        };
    }, [isInView]);

    return (
        <section ref={sectionRef} className="c-space section-spacing relative overflow-hidden pt-5">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-royal/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender/20 rounded-full blur-3xl" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-mint/10 rounded-full blur-2xl"></div>
            </div>

            <motion.div 
                className="container mx-auto max-w-6xl relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <div
                    ref={containerRef}
                    className="flex flex-col md:flex-row items-center justify-between gap-12 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-navy/60 via-midnight/50 to-indigo/40 border border-white/20 backdrop-blur-md shadow-2xl shadow-royal/20"
                >
                        <motion.div 
                            className="w-full md:w-1/2 order-2 md:order-1"
                            variants={leftVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                        >
                            <div className="relative">
                                {/* Text highlight effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-royal/20 to-lavender/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <h1 className="relative text-4xl md:text-5xl lg:text-4xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-white to-mint/80 bg-clip-text text-transparent">
                                    I believe in building simple, efficient, and user-friendly solutions that solve real problems.
                                </h1>
                            </div>
                            
                            <motion.div
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                className="flex flex-col items-center sm:items-start sm:flex-row gap-4"
                            >
                                <a 
                                    href="https://www.linkedin.com/in/gourav-singh060404/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 w-40 h-14 border-2 border-white/30 rounded-full text-white font-medium hover:border-transparent transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                                >
                                    {/* Gradient background that appears on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-royal to-lavender opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Button shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    
                                    <img src="../public/assets/socials/linkedin.svg" alt="LinkedIn" className="w-5 h-5 transition-transform group-hover:scale-110 relative z-10" />
                                    <span className="relative z-10">LinkedIn</span>
                                </a>
                                
                                <a 
                                    href="https://github.com/gaurav060404" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 w-40 h-14 border-2 border-white/30 rounded-full text-white font-medium hover:border-transparent transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                                >
                                    {/* Gradient background that appears on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-royal to-lavender opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Button shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    
                                    <svg className="w-5 h-5 transition-transform group-hover:scale-110 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="relative z-10">GitHub</span>
                                </a>
                                
                                <a 
                                    href="#contact" 
                                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 w-56 h-14 border-2 border-emerald-500/50 rounded-full text-white font-medium hover:border-transparent transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                                >
                                    {/* Gradient background that appears on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Button shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    
                                    <svg className="w-5 h-5 transition-transform group-hover:scale-110 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    <span className="relative z-10">Let's Connect</span>
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center"
                            variants={rightVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                        >
                            <div className="relative ml-4">
                                {/* Glow effect around image (reduced motion to lower CPU) */}
                                <div className="absolute -inset-8 bg-gradient-to-r from-royal/30 via-lavender/30 to-mint/30 rounded-full blur-2xl opacity-60"></div>
                                
                                <div className="relative">
                                    <PixelImage
                                        src="assets/gaurav.jpg"
                                        grid="8x8"
                                        customGrid={customGrid}
                                        pixelFadeInDuration={computedTimings.pixelFadeInDuration}
                                        maxAnimationDelay={computedTimings.maxAnimationDelay}
                                        colorRevealDelay={1200}
                                        isInView={isInView}
                                    />
                                    
                                    {/* Floating particles */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-mint rounded-full animate-ping"></div>
                                    <div className="absolute bottom-8 left-4 w-1 h-1 bg-lavender rounded-full animate-pulse"></div>
                                    <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-royal rounded-full animate-bounce"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
        </section>
    )
}

export default Personal;