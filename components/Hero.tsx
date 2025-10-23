"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const revolvingLightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial logo entrance animation
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.3, rotate: -180 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
          delay: 0.3,
        }
      );

      // Continuous revolving light animation
      gsap.to(revolvingLightRef.current, {
        rotation: 360,
        duration: 3,
        ease: "none",
        repeat: -1,
      });

      // Scroll-triggered animations
      const scrollTrigger = {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      };

      // Logo fades to low opacity and becomes fixed background
      gsap.to(logoContainerRef.current, {
        opacity: 0.05,
        scale: 0.6,
        scrollTrigger: {
          ...scrollTrigger,
          start: "top top",
          end: "30% top",
        },
      });

      // Content fades in on scroll
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            ...scrollTrigger,
            start: "10% top",
            end: "30% top",
          },
        }
      );

      // Floating animation for background elements
      gsap.to(".floating", {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"></div>
        <div className="floating absolute top-40 right-10 w-72 h-72 bg-gray-400 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="floating absolute -bottom-8 left-40 w-72 h-72 bg-yellow-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black"></div>
      </div>

      {/* Logo Container - Fixed background that becomes semi-transparent */}
      <div
        ref={logoContainerRef}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div ref={logoRef} className="relative">
          <Image
            src="/logo.svg"
            alt="AlQaim Developers Logo"
            width={300}
            height={300}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl relative z-10"
          />

          {/* Revolving Light Effect - Positioned further from logo */}
          <div
            ref={revolvingLightRef}
            className="absolute inset-0 pointer-events-none"
            style={{ transform: "scale(1.4)" }}
          >
            {/* Connecting threads/ring between orbs */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Circle path connecting all orbs - passes through orb centers */}
              <circle
                cx="50"
                cy="50"
                r="50"
                fill="none"
                stroke="url(#gradient-ring)"
                strokeWidth="0.5"
                opacity="0.7"
                style={{ transform: "translate(0, 0)" }}
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient
                  id="gradient-ring"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                  <stop offset="25%" stopColor="#ffffff" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#eab308" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#9ca3af" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9" />
                </linearGradient>
              </defs>
            </svg>

            {/* Multiple light orbs revolving - positioned at circle edge */}
            <div className="absolute top-0 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-500/80 blur-[2px]"></div>
            <div className="absolute bottom-0 left-1/2 w-6 h-6 -translate-x-1/2 translate-y-1/2 bg-white rounded-full shadow-lg shadow-white/80 blur-[2px]"></div>
            <div className="absolute top-1/2 left-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full shadow-lg shadow-yellow-600/80 blur-[2px]"></div>
            <div className="absolute top-1/2 right-0 w-6 h-6 translate-x-1/2 -translate-y-1/2 bg-gray-400 rounded-full shadow-lg shadow-gray-400/80 blur-[2px]"></div>
          </div>

          {/* Central glow effect only - no pulsing rings */}
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-3xl"></div>
          <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 z-10">
        {/* Main Content - Fades in on scroll, overlapping logo position */}
        <div
          ref={contentRef}
          className="relative text-center "
          style={{ opacity: 0 }}
        >
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent px-4"
          >
            Transform Your Digital Presence
          </h1>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
          >
            We bring your vision to life with cutting-edge web development,
            stunning design, and powerful marketing strategies that drive
            results.
          </p>
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-200 text-center"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto border-2 border-yellow-500 text-yellow-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-500/10 transform hover:scale-105 transition-all duration-200 text-center"
            >
              Explore Services
            </a>
          </div>

          {/* Stats Section */}
          <div
            ref={statsRef}
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4"
          >
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "6+", label: "Services Offered" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
