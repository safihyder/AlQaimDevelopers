"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const revolvingLightRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const centeredScrollRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

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
      // gsap.fromTo(
      //   contentRef.current,
      //   { opacity: 0, y: 100 },
      //   {
      //     opacity: 1,
      //     y: 0,
      //     scrollTrigger: {
      //       ...scrollTrigger,
      //       start: "10% top",
      //       end: "30% top",
      //     },
      //   }
      // );

      /*
      // Fade out scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "5% top",
          end: "15% top",
          scrub: true,
        },
      });
      */

      // Floating animation for background elements
      gsap.to(".floating", {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });

      // Centered Scroll Down indicator (Hero only)
      gsap.to(centeredScrollRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "10% top",
          end: "30% top",
          scrub: true
        }
      });

      // Show indicator with delay
      gsap.fromTo(centeredScrollRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1,
          ease: "power2.out"
        }
      );

      // Global Scroll Progress Bar animation
      gsap.to(progressBarRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        }
      });

      // Show Progress indicator ONLY after scrolling past Hero
      gsap.fromTo(scrollIndicatorRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "30% top",
            end: "50% top",
            scrub: true
          }
        }
      );

      // Toggle Up/Down state based on scroll position (near bottom/footer)
      ScrollTrigger.create({
        trigger: "html",
        start: "bottom 100%", // This is standard for end-of-page detection
        end: "bottom bottom",
        onEnter: () => setIsAtBottom(true),
        onLeaveBack: () => setIsAtBottom(false),
      });

      // Alternatively, use a simpler bottom threshold
      ScrollTrigger.create({
        start: "bottom bottom-=100px",
        onEnter: () => setIsAtBottom(true),
        onLeaveBack: () => setIsAtBottom(false),
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToHeroContent = () => {
    const nextSection = document.getElementById("hero-content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleIndicatorClick = () => {
    if (isAtBottom) {
      scrollToTop();
    } else {
      scrollToHeroContent();
    }
  };


  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black"
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

      {/* Centered Scroll Down Indicator - Visible only at start */}
      <div
        ref={centeredScrollRef}
        onClick={handleIndicatorClick}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-[999] group opacity-0"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-yellow-500/60 group-hover:text-yellow-500 transition-colors">
          Discover
        </span>
        <div className="relative w-6 h-10 border-2 border-yellow-500/20 rounded-full flex justify-center group-hover:border-yellow-500/50 transition-all p-1">
          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce mt-1"></div>
        </div>
      </div>

      {/* Progress Scroll Indicator - Bottom Right - Visible after Hero */}
      <div
        ref={scrollIndicatorRef}
        onClick={handleIndicatorClick}
        className="fixed bottom-10 right-4 sm:right-8 flex flex-row items-center gap-4 cursor-pointer group z-[999] opacity-0"
      >
        {/* <div className="relative flex flex-col items-end pointer-events-none w-24 h-8 overflow-hidden">
          <div className={`absolute right-0 flex flex-col items-end transition-all duration-500 ${isAtBottom ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="text-yellow-500 text-[10px] uppercase font-black tracking-widest leading-none">
              Back To
            </span>
            <span className="text-white text-[12px] uppercase font-black tracking-widest leading-tight">
              Top
            </span>
          </div>
          <div className={`absolute right-0 flex flex-col items-end transition-all duration-500 ${isAtBottom ? '-translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
            <span className="text-yellow-500 text-[10px] uppercase font-black tracking-widest leading-none">
              Scroll
            </span>
            <span className="text-white/40 text-[9px] uppercase tracking-widest leading-tight">
              Progress
            </span>
          </div>
        </div> */}
        {/* Dynamic Arrow (Rotates) */}
        <div className={`relative flex flex-col items-center transition-transform duration-700 ease-in-out ${isAtBottom ? 'rotate-180' : 'rotate-0'}`}>
          <div className="w-[1px] h-12 bg-linear-to-b from-transparent via-yellow-500/50 to-yellow-500 animate-pulse"></div>
          <svg
            className="w-5 h-5 text-yellow-500 animate-bounce -mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
        <div className="relative w-1.5 h-32 bg-yellow-500/10 rounded-full overflow-hidden border border-yellow-500/5 backdrop-blur-sm">
          {/* Background trace */}
          <div className="absolute inset-0 bg-yellow-500/5"></div>
          {/* Progress fill */}
          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 w-full bg-linear-to-b from-yellow-400 via-yellow-500 to-yellow-600 origin-top shadow-[0_0_15px_rgba(234,179,8,0.5)]"
            style={{ height: '100%', transform: 'scaleY(0)' }}
          ></div>
        </div>


      </div>
    </section>
  );
}


