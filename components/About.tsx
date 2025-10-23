"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-linear-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              About AlQaim Developers
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We are a dynamic team of creative professionals dedicated to
              transforming your digital dreams into reality. With years of
              experience and a passion for innovation, we deliver exceptional
              results that exceed expectations.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our mission is to empower businesses with cutting-edge digital
              solutions that drive growth, enhance brand presence, and create
              lasting impressions in the digital landscape.
            </p>
            <div className="space-y-4">
              {[
                "Expert team of developers and designers",
                "Client-focused approach",
                "Innovative and creative solutions",
                "Timely delivery and support",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="shrink-0 w-6 h-6 bg-linear-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20">
              <div className="bg-linear-to-br from-gray-900 via-gray-800 to-black p-12 border border-yellow-500/20">
                <div className="space-y-8">
                  <div className="bg-yellow-500/10 backdrop-blur-md rounded-xl p-6 border border-yellow-500/30">
                    <h3 className="text-2xl font-bold mb-2 text-yellow-500">
                      Our Vision
                    </h3>
                    <p className="text-gray-300">
                      To be the leading digital agency that transforms
                      businesses through innovative technology and creative
                      excellence.
                    </p>
                  </div>
                  <div className="bg-gray-400/10 backdrop-blur-md rounded-xl p-6 border border-gray-400/30">
                    <h3 className="text-2xl font-bold mb-2 text-gray-300">
                      Our Values
                    </h3>
                    <p className="text-gray-400">
                      Innovation, integrity, excellence, and client satisfaction
                      drive everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gray-400 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
