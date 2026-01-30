import React from 'react'

export default function AboutMe() {
    return (
        <section id="about-me" className="relative flex items-center justify-center min-h-screen c-space">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl p-8 mx-auto border border-white/10 rounded-2xl bg-gradient-to-br from-storm to-indigo">
                <div className="flex-shrink-0">
                    <img
                        src="/assets/gaurav.jpg"
                        alt="Gaurav"
                        className="w-48 h-56 md:w-56 md:h-64 rounded-2xl object-cover border border-white/20"
                        loading="lazy"
                    />
                </div>

                <div className="flex-1 text-center md:text-left space-y-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Hi, I'm Gaurav
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-aqua to-mint rounded-full mx-auto md:mx-0"></div>
                    </div>

                    <p className="text-gray_gradient text-md leading-relaxed max-w-lg">
                        I’m a Computer Science undergraduate and Full Stack Web Developer with hands-on experience building production-ready web applications using React, Node.js, and modern JavaScript technologies. I enjoy working across the stack, designing scalable systems, and writing clean, maintainable code.
                    </p>
                    <p className="text-gray_gradient text-md leading-relaxed max-w-lg">
                        Through internships and personal projects, I’ve worked on full-stack features, RESTful APIs, and frontend components while collaborating with engineering teams. I’m continuously learning and looking for opportunities to grow as a software engineer and contribute to impactful, real-world products.
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start pt-4">
                        <a
                            href="YOUR_GITHUB_LINK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <a
                            href="YOUR_LINKEDIN_LINK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label="LinkedIn"
                        >
                            <img src="/assets/socials/linkedIn.svg" alt="LinkedIn" className="w-5 h-5 mr-2" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
