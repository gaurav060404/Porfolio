import { PixelImage } from "../components/PixelImage";
import { animate, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Personal() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const handleResumeDownload = () => {
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = '/assets/GouravSinghResume.pdf'; // Adjust path to your resume file
        link.download = 'Resume.pdf'; // Name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                <div className="absolute top-20 left-10 w-72 h-72 bg-royal/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-mint/10 rounded-full blur-2xl"></div>
            </div>

            <motion.div 
                className="container mx-auto max-w-6xl relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div
                    ref={containerRef}
                    className="flex flex-col md:flex-row items-center justify-between gap-12 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-navy/60 via-midnight/50 to-indigo/40 border border-white/20 backdrop-blur-md shadow-2xl shadow-royal/20"
                >
                        <motion.div 
                            className="w-full md:w-1/2 order-2 md:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        >
                            <div className="relative">
                                {/* Text highlight effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-royal/20 to-lavender/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <h1 className="relative text-4xl md:text-5xl lg:text-4xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-white to-mint/80 bg-clip-text text-transparent">
                                    I believe in building simple, efficient, and user-friendly solutions that solve real problems.
                                </h1>
                            </div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <button 
                                    onClick={handleResumeDownload}
                                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-royal to-lavender rounded-full text-white font-medium hover-animation transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                                >
                                    {/* Button shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    
                                    <svg 
                                        className="w-5 h-5 transition-transform group-hover:scale-110" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                                        />
                                    </svg>
                                    <span className="relative z-10">Download Resume</span>
                                </button>
                                
                                <a 
                                    href="#contact" 
                                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    Let's Connect
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center"
                            initial={{ opacity: 0, x: 50, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.8 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        >
                            <div className="relative ml-4">
                                {/* Glow effect around image */}
                                <div className="absolute -inset-8 bg-gradient-to-r from-royal/30 via-lavender/30 to-mint/30 rounded-full blur-2xl opacity-60"></div>
                                
                                <div className="relative">
                                    <PixelImage
                                        src="assets/gaurav.jpg"
                                        grid="8x8"
                                        pixelFadeInDuration={800}
                                        maxAnimationDelay={1500}
                                        colorRevealDelay={2000}
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

export default Personal