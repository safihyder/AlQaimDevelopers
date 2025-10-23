"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: number | null;
}

interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  gradient: string;
  borderColor: string;
  iconBg: string;
  features: string[];
  benefits: string[];
  process: string[];
  technologies: string[];
  pricing: {
    basic: string;
    premium: string;
    enterprise: string;
  };
  duration: string;
  deliverables: string[];
}

export default function ServiceDetails({
  isOpen,
  onClose,
  serviceId,
}: ServiceDetailsProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const services: ServiceDetail[] = [
    {
      id: 0,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      iconSrc: "/webdev.png",
      iconAlt: "Web Development",
      gradient: "from-yellow-500 to-yellow-600",
      borderColor: "border-yellow-500/20",
      iconBg: "bg-yellow-500/10",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading Speed",
        "Cross-browser Compatibility",
        "Mobile-first Approach",
        "Content Management System",
      ],
      benefits: [
        "Increased Online Visibility",
        "Better User Experience",
        "Higher Conversion Rates",
        "Professional Brand Image",
        "Scalable Solutions",
        "24/7 Online Presence",
      ],
      process: [
        "Discovery & Planning",
        "Design & Prototyping",
        "Development & Testing",
        "Deployment & Launch",
        "Maintenance & Support",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      pricing: {
        basic: "$2,000 - $5,000",
        premium: "$5,000 - $15,000",
        enterprise: "$15,000+",
      },
      duration: "2-8 weeks",
      deliverables: [
        "Fully Responsive Website",
        "SEO Setup",
        "Content Management",
        "Analytics Integration",
        "Documentation",
      ],
    },
    {
      id: 1,
      title: "Graphic Designing",
      description:
        "Eye-catching visual designs that communicate your brand message and captivate your audience.",
      iconSrc: "/graphic-design.png",
      iconAlt: "Graphic Designing",
      gradient: "from-gray-400 to-gray-500",
      borderColor: "border-gray-400/20",
      iconBg: "bg-gray-400/10",
      features: [
        "Logo Design",
        "Brand Identity",
        "Print Materials",
        "Digital Graphics",
        "UI/UX Design",
        "Social Media Graphics",
      ],
      benefits: [
        "Strong Brand Recognition",
        "Professional Appearance",
        "Increased Engagement",
        "Consistent Visual Identity",
        "Competitive Advantage",
        "Memorable Impressions",
      ],
      process: [
        "Brand Analysis",
        "Concept Development",
        "Design Creation",
        "Client Feedback",
        "Finalization & Delivery",
      ],
      technologies: [
        "Adobe Creative Suite",
        "Figma",
        "Sketch",
        "Canva Pro",
        "Illustrator",
        "Photoshop",
      ],
      pricing: {
        basic: "$500 - $1,500",
        premium: "$1,500 - $5,000",
        enterprise: "$5,000+",
      },
      duration: "1-3 weeks",
      deliverables: [
        "Logo Design",
        "Brand Guidelines",
        "Business Cards",
        "Social Media Kit",
        "Print Materials",
      ],
    },
    {
      id: 2,
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that drive traffic, generate leads, and boost your online presence.",
      iconSrc: "/marketing.png",
      iconAlt: "Digital Marketing",
      gradient: "from-yellow-400 to-yellow-600",
      borderColor: "border-yellow-400/20",
      iconBg: "bg-yellow-400/10",
      features: [
        "SEO Optimization",
        "PPC Advertising",
        "Content Marketing",
        "Email Marketing",
        "Social Media Ads",
        "Analytics & Reporting",
      ],
      benefits: [
        "Increased Website Traffic",
        "Higher Lead Generation",
        "Better ROI",
        "Brand Awareness",
        "Targeted Reach",
        "Measurable Results",
      ],
      process: [
        "Market Research",
        "Strategy Development",
        "Campaign Creation",
        "Implementation",
        "Monitoring & Optimization",
      ],
      technologies: [
        "Google Ads",
        "Facebook Ads",
        "Google Analytics",
        "Mailchimp",
        "HubSpot",
        "SEMrush",
      ],
      pricing: {
        basic: "$1,000 - $3,000/month",
        premium: "$3,000 - $8,000/month",
        enterprise: "$8,000+/month",
      },
      duration: "Ongoing",
      deliverables: [
        "Marketing Strategy",
        "Ad Campaigns",
        "Content Calendar",
        "Performance Reports",
        "ROI Analysis",
      ],
    },
    {
      id: 3,
      title: "Social Media Management",
      description:
        "Comprehensive social media strategies to engage your audience and build a strong community.",
      iconSrc: "/social-media.png",
      iconAlt: "Social Media Management",
      gradient: "from-gray-300 to-gray-500",
      borderColor: "border-gray-300/20",
      iconBg: "bg-gray-300/10",
      features: [
        "Content Creation",
        "Post Scheduling",
        "Community Management",
        "Hashtag Research",
        "Influencer Outreach",
        "Performance Analytics",
      ],
      benefits: [
        "Increased Engagement",
        "Brand Loyalty",
        "Community Building",
        "Customer Support",
        "Market Insights",
        "Viral Potential",
      ],
      process: [
        "Platform Analysis",
        "Content Strategy",
        "Content Creation",
        "Scheduling & Posting",
        "Engagement & Monitoring",
      ],
      technologies: [
        "Hootsuite",
        "Buffer",
        "Canva",
        "Later",
        "Sprout Social",
        "Meta Business",
      ],
      pricing: {
        basic: "$800 - $2,000/month",
        premium: "$2,000 - $5,000/month",
        enterprise: "$5,000+/month",
      },
      duration: "Ongoing",
      deliverables: [
        "Content Calendar",
        "Social Media Posts",
        "Engagement Reports",
        "Growth Analytics",
        "Community Guidelines",
      ],
    },
    {
      id: 4,
      title: "Influencer Marketing",
      description:
        "Connect with the right influencers to amplify your brand reach and drive authentic engagement.",
      iconSrc: "/influencer.png",
      iconAlt: "Influencer Marketing",
      gradient: "from-yellow-500 to-yellow-700",
      borderColor: "border-yellow-500/20",
      iconBg: "bg-yellow-500/10",
      features: [
        "Influencer Research",
        "Campaign Strategy",
        "Content Collaboration",
        "Performance Tracking",
        "Relationship Management",
        "ROI Analysis",
      ],
      benefits: [
        "Authentic Reach",
        "Trusted Recommendations",
        "Targeted Audience",
        "High Engagement",
        "Brand Awareness",
        "Sales Conversion",
      ],
      process: [
        "Influencer Discovery",
        "Outreach & Negotiation",
        "Campaign Planning",
        "Content Creation",
        "Launch & Monitoring",
      ],
      technologies: [
        "AspireIQ",
        "Upfluence",
        "Grin",
        "Creator.co",
        "Instagram",
        "TikTok",
      ],
      pricing: {
        basic: "$2,000 - $5,000/campaign",
        premium: "$5,000 - $15,000/campaign",
        enterprise: "$15,000+/campaign",
      },
      duration: "2-6 weeks",
      deliverables: [
        "Influencer List",
        "Campaign Strategy",
        "Content Assets",
        "Performance Report",
        "ROI Analysis",
      ],
    },
    {
      id: 5,
      title: "Branding",
      description:
        "Complete brand identity solutions that make your business stand out and resonate with your target audience.",
      iconSrc: "/branding.png",
      iconAlt: "Branding",
      gradient: "from-gray-400 to-gray-600",
      borderColor: "border-gray-400/20",
      iconBg: "bg-gray-400/10",
      features: [
        "Brand Strategy",
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Voice",
        "Brand Positioning",
      ],
      benefits: [
        "Memorable Brand Identity",
        "Consistent Messaging",
        "Competitive Differentiation",
        "Customer Trust",
        "Brand Recognition",
        "Market Positioning",
      ],
      process: [
        "Brand Discovery",
        "Strategy Development",
        "Visual Design",
        "Guidelines Creation",
        "Implementation Support",
      ],
      technologies: [
        "Adobe Creative Suite",
        "Figma",
        "Sketch",
        "Brand Guidelines",
        "Style Guides",
        "Mood Boards",
      ],
      pricing: {
        basic: "$3,000 - $8,000",
        premium: "$8,000 - $20,000",
        enterprise: "$20,000+",
      },
      duration: "3-6 weeks",
      deliverables: [
        "Brand Strategy",
        "Logo Design",
        "Brand Guidelines",
        "Visual Assets",
        "Brand Voice Guide",
      ],
    },
  ];

  const selectedService = services.find((service) => service.id === serviceId);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  if (!isOpen || !selectedService) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`relative p-8 bg-linear-to-r ${selectedService.gradient} rounded-t-2xl`}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex items-center space-x-6">
            <div className="w-20 h-20  rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Image
                src={selectedService.iconSrc}
                alt={selectedService.iconAlt}
                width={100}
                height={100}
                className="w-70 h-70 object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {selectedService.title}
              </h2>
              <p className="text-white/90 text-lg">
                {selectedService.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Features & Benefits */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span
                  className={`w-2 h-8 bg-linear-to-b ${selectedService.gradient} rounded-full mr-3`}
                ></span>
                Key Features
              </h3>
              <ul className="space-y-3">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span
                  className={`w-2 h-8 bg-linear-to-b ${selectedService.gradient} rounded-full mr-3`}
                ></span>
                Benefits
              </h3>
              <ul className="space-y-3">
                {selectedService.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-3 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span
                className={`w-2 h-8 bg-linear-to-b ${selectedService.gradient} rounded-full mr-3`}
              ></span>
              Our Process
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {selectedService.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full bg-linear-to-r ${selectedService.gradient} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {index + 1}
                  </div>
                  <p className="text-gray-300 text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Pricing */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span
                  className={`w-2 h-8 bg-linear-to-b ${selectedService.gradient} rounded-full mr-3`}
                ></span>
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 bg-linear-to-r ${selectedService.gradient} text-white text-sm rounded-full`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span
                  className={`w-2 h-8 bg-linear-to-b ${selectedService.gradient} rounded-full mr-3`}
                ></span>
                Pricing
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center">
                    <svg
                      className="w-8 h-8 text-green-500 mr-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 text-lg">Basic</span>
                  </div>
                  <span className="text-white font-semibold text-lg">
                    {selectedService.pricing.basic}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center">
                    <svg
                      className="w-8 h-8 text-blue-500 mr-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 text-lg">Premium</span>
                  </div>
                  <span className="text-white font-semibold text-lg">
                    {selectedService.pricing.premium}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center">
                    <svg
                      className="w-8 h-8 text-yellow-500 mr-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 text-lg">Enterprise</span>
                  </div>
                  <span className="text-white font-semibold text-lg">
                    {selectedService.pricing.enterprise}
                  </span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Duration & Deliverables */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span
                  className={`w-2 h-8 bg-linear-to-b ${selectedService.gradient} rounded-full mr-3`}
                ></span>
                Duration
              </h3>
              <p className="text-3xl font-bold text-white">
                {selectedService.duration}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span
                  className={`w-2 h-8 bg-linear-to-b ${selectedService.gradient} rounded-full mr-3`}
                ></span>
                Deliverables
              </h3>
              <ul className="space-y-2">
                {selectedService.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg
                      className="w-4 h-4 text-yellow-500 mr-2 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
            <button
              className={`flex-1 px-8 py-4 bg-linear-to-r ${selectedService.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105`}
            >
              Get Started Now
            </button>
            <button className="flex-1 px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl hover:border-gray-400 transition-all duration-300">
              Request Quote
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
