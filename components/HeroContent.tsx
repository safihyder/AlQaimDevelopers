"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroContent() {
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial entrance animation
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.5,
                }
            );

            // Subtle parallax on scroll
            gsap.to(contentRef.current, {
                y: -50,
                scrollTrigger: {
                    trigger: "#home",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            // Stats reveal animation
            gsap.fromTo(
                statsRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 1,
                    ease: "power2.out",
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            id="hero-content"
            ref={sectionRef}
            className="py-20 bg-linear-to-b from-black via-gray-950 to-black"
        >
            {/* Main Content - Fades in on scroll */}
            <div
                ref={contentRef}
                className="relative text-center"
                style={{ opacity: 0 }}
            >
                <h1
                    ref={titleRef}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent pb-4"
                >
                    Transform Your Digital Presence
                </h1>
                <p
                    ref={subtitleRef}
                    className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto px-4 leading-relaxed"
                >
                    We bring your vision to life with cutting-edge web development,
                    stunning design, and powerful marketing strategies that drive
                    results.
                </p>
                <div
                    ref={ctaRef}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
                >
                    <a
                        href="#contact"
                        className="w-full sm:w-auto bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-black px-10 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transform hover:scale-105 transition-all duration-300 text-center"
                    >
                        Start Your Project
                    </a>
                    <a
                        href="#services"
                        className="w-full sm:w-auto border-2 border-yellow-500/50 text-yellow-500 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-500/10 hover:border-yellow-500 transform hover:scale-105 transition-all duration-300 text-center"
                    >
                        Explore Services
                    </a>
                </div>

                {/* Stats Section */}
                <div
                    ref={statsRef}
                    className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 px-4"
                >
                    {[
                        { number: "100+", label: "Projects Completed" },
                        { number: "50+", label: "Happy Clients" },
                        { number: "6+", label: "Services Offered" },
                        { number: "24/7", label: "Support Available" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                {stat.number}
                            </div>
                            <div className="text-gray-500 mt-2 text-sm sm:text-base uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
