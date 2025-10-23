"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create FormData for Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("service", formData.service);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("timestamp", new Date().toISOString());

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyVlpXTzexyJKHX8MCpmV3X0atnL1pLrcaZOA1iKhmmAB60vXL0szaL5mH4DzWrsEot8A/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }
      );

      // Since we're using no-cors mode, we can't check the response status
      // But we'll assume success if no error is thrown
      setSubmitStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-linear-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 contact-content">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to take your business to the next level? Get in touch with us
            today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-content">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/20"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="graphic-design">Graphic Designing</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="influencer">Influencer Marketing</option>
                  <option value="branding">Branding</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : "bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-black hover:shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-900/50 border border-green-500/50 rounded-lg text-green-400 text-center">
                  ✅ Thank you! Your message has been sent successfully. We'll
                  get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-red-400 text-center">
                  ❌ Sorry, there was an error sending your message. Please try
                  again or contact us directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-content space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-yellow-500">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-12 h-12 bg-linear-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">info@alqaimdevelopers.com</p>
                    <p className="text-gray-400">
                      support@alqaimdevelopers.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-12 h-12 bg-linear-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-12 h-12 bg-linear-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office</h4>
                    <p className="text-gray-400">123 Business Street</p>
                    <p className="text-gray-400">
                      Suite 100, City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-linear-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-2xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <p className="mb-6 text-black/80">
                Stay connected with us on social media
              </p>
              <div className="flex space-x-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center hover:bg-black/30 transition-all duration-200 backdrop-blur-sm group"
                  aria-label="WhatsApp"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    width={30}
                    height={30}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/alqaimdevelopers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center hover:bg-black/30 transition-all duration-200 backdrop-blur-sm group"
                  aria-label="Instagram"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={50}
                    height={50}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/alqaimdevelopers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center hover:bg-black/30 transition-all duration-200 backdrop-blur-sm group"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
