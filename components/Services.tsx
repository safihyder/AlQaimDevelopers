"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ServiceDetails from "./ServiceDetails";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleServiceClick = (serviceId: number) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedServiceId(null);
  };

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      iconSrc: "/webdev.png",
      iconAlt: "Web Development",
      gradient: "from-yellow-500 to-yellow-600",
      borderColor: "border-yellow-500/20",
      iconBg: "bg-yellow-500/10",
    },
    {
      title: "Graphic Designing",
      description:
        "Eye-catching visual designs that communicate your brand message and captivate your audience.",
      iconSrc: "/graphic-design.png",
      iconAlt: "Graphic Designing",
      gradient: "from-gray-400 to-gray-500",
      borderColor: "border-gray-400/20",
      iconBg: "bg-gray-400/10",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that drive traffic, generate leads, and boost your online presence.",
      iconSrc: "/marketing.png",
      iconAlt: "Digital Marketing",
      gradient: "from-yellow-400 to-yellow-600",
      borderColor: "border-yellow-400/20",
      iconBg: "bg-yellow-400/10",
    },
    {
      title: "Social Media Management",
      description:
        "Comprehensive social media strategies to engage your audience and build a strong community.",
      iconSrc: "/social-media.png",
      iconAlt: "Social Media Management",
      gradient: "from-gray-300 to-gray-500",
      borderColor: "border-gray-300/20",
      iconBg: "bg-gray-300/10",
    },
    {
      title: "Influencer Marketing",
      description:
        "Connect with the right influencers to amplify your brand reach and drive authentic engagement.",
      iconSrc: "/influencer.png",
      iconAlt: "Influencer Marketing",
      gradient: "from-yellow-500 to-yellow-700",
      borderColor: "border-yellow-500/20",
      iconBg: "bg-yellow-500/10",
    },
    {
      title: "Branding",
      description:
        "Complete brand identity solutions that make your business stand out and resonate with your target audience.",
      iconSrc: "/branding.png",
      iconAlt: "Branding",
      gradient: "from-gray-400 to-gray-600",
      borderColor: "border-gray-400/20",
      iconBg: "bg-gray-400/10",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-linear-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business to
            new heights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 border ${service.borderColor} overflow-hidden`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={service.iconSrc}
                    alt={service.iconAlt}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => handleServiceClick(index)}
                  className={`mt-6 inline-flex items-center text-transparent bg-linear-to-r ${service.gradient} bg-clip-text font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer`}
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${service.gradient} opacity-10 blur-2xl rounded-full -translate-y-10 translate-x-10`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <ServiceDetails
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        serviceId={selectedServiceId}
      />
    </section>
  );
}
