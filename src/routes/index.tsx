import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Typewriter } from '../components/Typewriter'

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Davita Kombat Security",
      desc: "Elite Nigerian private security solutions, offering unparalleled protection with discipline and honor.",
      img: "/images/manned_guarding.jpg",
    },
    {
      title: "Tactical Response Teams",
      desc: "Highly trained, professional Nigerian security personnel ready to deploy across Nigeria.",
      img: "/images/davita_patrol_team.jpg",
    },
    {
      title: "Armed Escort & VIP Protocol",
      desc: "Elite VIP protection and secure transit across all Nigerian territories.",
      img: "/images/escort_services.jpg",
    },
    {
      title: "Command & Control",
      desc: "24/7 advanced technological surveillance and rapid response coordination.",
      img: "/images/command_control.jpg",
    },
  ];

  const topServices = [
    {
      title: "Escort/Protocol Services",
      desc: "Reliable and discreet accompaniment for VIPs, executives, dignitaries, and delegates across Nigerian airports and state functions.",
      img: "/images/escort_services.jpg",
      path: "/services/escort-services",
    },
    {
      title: "Armed Escort (Intra/Interstate)",
      desc: "Heavy-duty tactical armed convoy escort and protective transit units safeguarding long-distance travel and cross-country haulage.",
      img: "/images/escort_services.jpg",
      path: "/services/armed-escort",
    },
    {
      title: "Car Tracking Services",
      desc: "24/7 GPS/GSM satellite vehicle telemetry, geo-fencing perimeter alerts, remote demobilization, and rapid recovery dispatch.",
      img: "/images/car_tracking.jpg",
      path: "/services/car-tracking",
    },
    {
      title: "Risk Analysis & Management",
      desc: "Comprehensive threat vulnerability audits, strategic risk mitigation frameworks, site surveys, and crisis response protocols.",
      img: "/images/command_control.jpg",
      path: "/services/risk-analysis",
    },
    {
      title: "Secured Transport",
      desc: "High-security armored vehicle transit for cash, bullion, sensitive documents, and critical assets with trained tactical operatives.",
      img: "/images/cash_in_transit.jpg",
      path: "/services/secured-transport",
    },
    {
      title: "Manned Guarding",
      desc: "Disciplined, NSCDC-certified static guards in official uniform, K9 patrols, and tactical perimeter security for corporate and industrial facilities.",
      img: "/images/manned_guarding.jpg",
      path: "/services/manned-guarding",
    },
    {
      title: "Cleaning Services",
      desc: "Professional commercial, industrial and corporate janitorial hygiene, post-construction cleanup, and facility maintenance.",
      img: "/images/security_hero_2.jpg",
      path: "/services/cleaning-services",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-[#fafafa] min-h-screen font-sans">
        
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-6rem)] min-h-[640px] max-h-[820px] overflow-hidden bg-[#0A192F]">
          {/* Background Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100 z-0" : "opacity-0 -z-10"}`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  alt={slide.title}
                  className="w-full h-full object-cover object-center opacity-60"
                  src={slide.img}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000d1a]/95 via-[#001026]/80 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-black/40"></div>
              </div>
            </div>
          ))}

          {/* Foreground Hero Content */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex items-center">
            <div className="max-w-2xl text-left transform transition-all duration-700 translate-y-0">
              
              {/* Tactical Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-label-tactical text-xs tracking-wider uppercase mb-5 backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                <span>OPERATIONAL STATE: ACTIVE • DEFCON-4 READY</span>
                <span className="hidden sm:inline text-blue-300/60">• NIGERIA WIDE</span>
              </div>

              {/* Main Headline with Typewriter */}
              <h1 className="font-headline-xl text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white mb-6 tracking-tight uppercase leading-[1.12] drop-shadow-2xl">
                <span className="block text-white">DAVITA KOMBAT</span>
                <span className="text-[#3b82f6] block min-h-[48px] sm:min-h-[60px] lg:min-h-[72px] mt-1 text-2xl sm:text-3xl lg:text-[46px]">
                  <Typewriter
                    words={[
                      "ESCORT / PROTOCOL SERVICES",
                      "ARMED ESCORT (INTRA/INTERSTATE)",
                      "CAR TRACKING SERVICES",
                      "RISK ANALYSIS & MITIGATION",
                      "SECURED ARMORED TRANSPORT",
                      "MANNED GUARDING FORCES",
                      "CORPORATE CLEANING SERVICES"
                    ]}
                    typingSpeed={65}
                    deletingSpeed={35}
                    pauseDuration={2200}
                    className="text-[#3b82f6]"
                    cursorClassName="bg-[#3b82f6] shadow-[0_0_12px_#3b82f6]"
                  />
                </span>
              </h1>

              {/* Dynamic Slide Context */}
              <p className="font-body-lg text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-[560px] leading-relaxed drop-shadow-md min-h-[56px] transition-opacity duration-700">
                {slides[currentSlide].desc}
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="bg-[#2563eb] hover:bg-blue-600 text-white font-extrabold text-[14px] uppercase tracking-wider px-8 py-4 rounded-lg shadow-[0_4px_20px_rgba(37,99,235,0.4)] transition-all hover-lift inline-flex items-center gap-2 group"
                >
                  <span>Request Security Quote</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                  to="/about-us"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/25 font-extrabold text-[14px] uppercase tracking-wider px-8 py-4 rounded-lg backdrop-blur-sm transition-all hover-lift inline-flex items-center gap-2"
                >
                  <span>Our Background</span>
                </Link>
              </div>

            </div>
          </div>

          {/* Slide Navigation Controls */}
          <div className="absolute bottom-8 left-6 right-6 lg:left-12 lg:right-12 z-20 flex items-center justify-between pointer-events-none max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 pointer-events-auto">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${currentSlide === index ? "w-8 h-2.5 bg-[#2563eb]" : "w-2.5 h-2.5 bg-gray-400/60 hover:bg-white"}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={handlePrevSlide}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-105"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextSlide}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-105"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* CSS for continuous sliding */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* Section: OUR TOP SERVICES */}
        <section className="w-full py-20 bg-white overflow-hidden reveal">
            <div className="max-w-7xl mx-auto flex flex-col items-center px-6 lg:px-12 mb-12">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#2563eb] animate-pulse"></div>
                    <h2 className="font-extrabold text-[#2563eb] tracking-wider uppercase text-sm sm:text-base">
                        OUR TOP SERVICES
                    </h2>
                </div>
            </div>

            <div className="w-full overflow-hidden">
                <div className="animate-scroll gap-6 px-3">
                    {[1, 2].map((set) => (
                        <div key={set} className="flex gap-6">
                            {topServices.map((service, sIdx) => (
                                <motion.div
                                    key={sIdx}
                                    whileHover={{ y: -8, transition: { duration: 0.25 } }}
                                    className="w-[320px] sm:w-[360px] md:w-[390px] bg-white border border-outline-variant/20 shadow-sm flex flex-col h-full group shrink-0 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="h-60 overflow-hidden relative bg-surface-container">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0b1c30]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                                            Tier-1 Security
                                        </div>
                                    </div>
                                    <div className="p-7 flex flex-col flex-1 justify-between">
                                        <div>
                                            <h3 className="font-extrabold text-[#2563eb] text-xl mb-3 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-6">
                                                {service.desc}
                                            </p>
                                        </div>
                                        <Link
                                            to={service.path}
                                            className="bg-[#2563eb] text-white font-bold px-6 py-3 text-sm rounded-lg hover:bg-[#2563eb]/90 transition-all self-start shadow-sm hover:shadow-md inline-flex items-center gap-1.5"
                                        >
                                            <span>Read More</span>
                                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 mt-12">
                <button className="w-12 h-12 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center hover:bg-gray-50 transition-colors text-[#2563eb] shadow-sm hover:scale-105">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center hover:bg-gray-50 transition-colors text-[#2563eb] shadow-sm hover:scale-105">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </section>

        {/* Section: FIELD CAPABILITIES (Security In Operation) */}
        <section className="w-full py-20 bg-black overflow-hidden reveal">
            <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-12">
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2.5 h-2.5 bg-[#2563eb] animate-ping"></div>
                        <h3 className="font-extrabold tracking-widest uppercase text-xs text-[#2563eb]">
                            FIELD CAPABILITIES
                        </h3>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white">
                        Security In Operation
                    </h2>
                </div>
            </div>

            {/* Horizontal Scroll / Grid for images */}
            <div className="w-full overflow-hidden">
                <div className="animate-scroll gap-4 px-3" style={{ animationDuration: '40s' }}>
                    {[1, 2].map((set) => (
                        <div key={set} className="flex gap-4">
                            <div className="shrink-0 w-[300px] md:w-[400px] h-[300px] relative rounded-xl overflow-hidden group hover-lift">
                                <img src="/images/command_control.jpg" alt="Control Room Monitoring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <h4 className="absolute bottom-6 left-6 text-white font-extrabold text-xl">24/7 Command Center</h4>
                            </div>

                            <div className="shrink-0 w-[300px] md:w-[400px] h-[300px] relative rounded-xl overflow-hidden group hover-lift">
                                <img src="/images/car_tracking.jpg" alt="Vehicle Telemetry & Tracking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <h4 className="absolute bottom-6 left-6 text-white font-extrabold text-xl">GPS Vehicle Tracking</h4>
                            </div>

                            <div className="shrink-0 w-[300px] md:w-[400px] h-[300px] relative rounded-xl overflow-hidden group hover-lift">
                                <img src="/images/davita_patrol_team.jpg" alt="Access Control & Screening" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <h4 className="absolute bottom-6 left-6 text-white font-extrabold text-xl">Access Control & Screening</h4>
                            </div>

                            <div className="shrink-0 w-[300px] md:w-[400px] h-[300px] relative rounded-xl overflow-hidden group hover-lift">
                                <img src="/images/davita_guard_officers.jpg" alt="Davita Guard Force" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <h4 className="absolute bottom-6 left-6 text-white font-extrabold text-xl">Trained Guard Force</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-[1600px] mx-auto mt-6 px-6 lg:px-12">
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-1/3 rounded-full animate-[pulseGlow_3s_infinite_alternate]"></div>
                </div>
            </div>
        </section>

        {/* Section: WHO WE ARE */}
        <section className="w-full py-24 px-6 lg:px-12 bg-white reveal">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 bg-[#2563eb]"></div>
                            <h3 className="font-extrabold tracking-widest uppercase text-sm text-[#2563eb]">
                                WHO WE ARE
                            </h3>
                        </div>
                        <p className="text-on-surface-variant font-medium text-lg leading-relaxed">
                            Davita Kombat Nigeria Limited is a well-known brand name in the private industrial security sector in Nigeria. Established in 1992, Davita Kombat has continued to offer quality and total security solutions to its numerous clients spread across the length and breadth of the country.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] hover-lift group">
                        <img src="/images/manned_guarding.jpg" alt="Davita Kombat Manned Security Officer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-lg h-[400px] hover-lift group">
                        <img src="/images/davita_guard_officers.jpg" alt="Davita Kombat Security Personnel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="flex flex-col order-1 lg:order-2">
                        <p className="text-on-surface-variant font-medium text-lg leading-relaxed mb-8">
                            Committed to delivering reliable, innovative, and client-focused security services tailored to meet diverse needs. With a team of well-trained professionals and a strong emphasis on integrity and excellence, the company consistently upholds the highest standards in the industry. Its dedication to continuous improvement and modern security practices ensures clients enjoy peace of mind at all times.
                        </p>
                        <Link to="/about/our-background" className="bg-[#2563eb] text-white font-extrabold px-8 py-4 rounded-lg hover:bg-[#2563eb]/90 transition-all self-start shadow-md hover-lift">
                            Read More
                        </Link>
                    </div>
                </div>

            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
