import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Davita Kombat Security",
      desc: "Elite Nigerian private security solutions, offering unparalleled protection with discipline and honor.",
      img: "/images/security_hero_1.jpg",
    },
    {
      title: "Tactical Response Teams",
      desc: "Highly trained, professional security personnel ready to deploy across Nigeria.",
      img: "/images/security_hero_2.jpg",
    },
    {
      title: "Armed Escort",
      desc: "Elite VIP protection and secure transit across all Nigerian territories.",
      img: "/images/security_hero_3.jpg",
    },
    {
      title: "Command & Control",
      desc: "24/7 advanced technological surveillance and rapid response coordination.",
      img: "/images/security_hero_1.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-[#fafafa] min-h-screen font-sans">
        
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-6rem)] min-h-[600px] max-h-[800px] overflow-hidden bg-[#0A192F]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  alt={slide.title}
                  className="w-full h-full object-cover object-center opacity-60"
                  src={slide.img}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
              </div>
              <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex items-center">
                <div className="max-w-2xl text-left transform transition-all duration-700 translate-y-0">
                  <h1 className="font-headline-xl text-5xl lg:text-[64px] font-extrabold text-white mb-6 tracking-tight uppercase leading-tight drop-shadow-xl">
                    {slide.title}
                  </h1>
                  <p className="font-body-lg text-lg lg:text-xl text-gray-200 mb-8 max-w-[500px] leading-relaxed drop-shadow-md">
                    {slide.desc}
                  </p>
                  <Link to="/about/our-background" className="bg-[#2563eb] hover:bg-[#2563eb]/90 text-black font-extrabold text-[14px] uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg transition-colors inline-block">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${currentSlide === index ? "w-8 h-2.5 bg-[#2563eb]" : "w-2.5 h-2.5 bg-gray-400/60 hover:bg-white"}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
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
        <section className="w-full py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center px-6 lg:px-12 mb-12">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#2563eb]"></div>
                    <h2 className="font-extrabold text-[#2563eb] tracking-wider uppercase">
                        OUR TOP SERVICES
                    </h2>
                </div>
            </div>

            <div className="w-full overflow-hidden">
                <div className="animate-scroll gap-6 px-3">
                    {[1, 2].map((set) => (
                        <div key={set} className="flex gap-6">
                            {/* Service 1 */}
                            <div className="w-[350px] md:w-[400px] bg-white border border-outline-variant/20 shadow-sm flex flex-col h-full group shrink-0">
                                <div className="h-64 overflow-hidden relative bg-surface-container">
                                    <img src="/images/security_hero_2.jpg" alt="Escort Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="font-extrabold text-[#2563eb] text-2xl mb-4">Escort Services</h3>
                                    <p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-8 flex-1">
                                        Reliable armed and unarmed escort services for personnel, valuables, and cargo across Nigeria.
                                    </p>
                                    <Link to="/services/escort-services" className="bg-[#2563eb] text-white font-bold px-6 py-3 text-sm hover:bg-[#2563eb]/90 transition-colors self-start">
                                        Read More
                                    </Link>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="w-[350px] md:w-[400px] bg-white border border-outline-variant/20 shadow-sm flex flex-col h-full group shrink-0">
                                <div className="h-64 overflow-hidden relative bg-surface-container">
                                    <img src="/images/security_hero_3.jpg" alt="Cash In Transit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="font-extrabold text-[#2563eb] text-2xl mb-4">Cash In Transit</h3>
                                    <p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-8 flex-1">
                                        Secure cash and valuables transportation with armored vehicles and trained operatives.
                                    </p>
                                    <Link to="/services/cash-in-transit" className="bg-[#2563eb] text-white font-bold px-6 py-3 text-sm hover:bg-[#2563eb]/90 transition-colors self-start">
                                        Read More
                                    </Link>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="w-[350px] md:w-[400px] bg-white border border-outline-variant/20 shadow-sm flex flex-col h-full group shrink-0">
                                <div className="h-64 overflow-hidden relative bg-surface-container">
                                    <img src="/images/security_hero_1.jpg" alt="Security Equipment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="font-extrabold text-[#2563eb] text-2xl mb-4">Security Equipment</h3>
                                    <p className="text-on-surface-variant font-medium text-sm leading-relaxed mb-8 flex-1">
                                        Supply, installation, and maintenance of professional-grade security equipment and systems.
                                    </p>
                                    <Link to="/services/security-equipment" className="bg-[#2563eb] text-white font-bold px-6 py-3 text-sm hover:bg-[#2563eb]/90 transition-colors self-start">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 mt-12">
                <button className="w-12 h-12 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center hover:bg-gray-50 transition-colors text-[#2563eb]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center hover:bg-gray-50 transition-colors text-[#2563eb]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </section>

        {/* Section: FIELD CAPABILITIES (Security In Operation) */}
        <section className="w-full py-20 bg-black overflow-hidden">
            <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-12">
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2.5 h-2.5 bg-[#2563eb]"></div>
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
                            <div className="shrink-0 w-[300px] md:w-[400px] h-[300px] relative rounded-lg overflow-hidden group">
                                <img src="/images/security_hero_1.jpg" alt="Control Room Monitoring" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <h4 className="absolute bottom-6 left-6 text-white font-extrabold text-xl">Control Room Monitoring</h4>
                            </div>

                            <div className="shrink-0 w-[300px] md:w-[400px] h-[300px] relative rounded-lg overflow-hidden group">
                                <img src="/images/security_hero_2.jpg" alt="CCTV Surveillance" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <h4 className="absolute bottom-6 left-6 text-white font-extrabold text-xl">CCTV Surveillance</h4>
                            </div>

                            <div className="shrink-0 w-[300px] md:w-[400px] h-[300px] relative rounded-lg overflow-hidden group">
                                <img src="/images/security_hero_3.jpg" alt="Key Watcher Access Control" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <h4 className="absolute bottom-6 left-6 text-white font-extrabold text-xl">Key Watcher Access Control</h4>
                            </div>

                            <div className="shrink-0 w-[300px] md:w-[400px] h-[300px] relative rounded-lg overflow-hidden group">
                                <img src="/images/security_hero_1.jpg" alt="Key Management Systems" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <h4 className="absolute bottom-6 left-6 text-white font-extrabold text-xl">Key Management Systems</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-[1600px] mx-auto mt-6 px-6 lg:px-12">
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white/50 w-1/3 rounded-full animate-[ping_3s_infinite_alternate]"></div>
                </div>
            </div>
        </section>

        {/* Section: WHO WE ARE */}
        <section className="w-full py-24 px-6 lg:px-12 bg-white">
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
                    <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
                        <img src="/images/security_hero_1.jpg" alt="Davita Kombat Office" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-lg h-[400px]">
                        <img src="/images/security_hero_3.jpg" alt="Guards Training" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col order-1 lg:order-2">
                        <p className="text-on-surface-variant font-medium text-lg leading-relaxed mb-8">
                            Committed to delivering reliable, innovative, and client-focused security services tailored to meet diverse needs. With a team of well-trained professionals and a strong emphasis on integrity and excellence, the company consistently upholds the highest standards in the industry. Its dedication to continuous improvement and modern security practices ensures clients enjoy peace of mind at all times.
                        </p>
                        <Link to="/about/our-background" className="bg-[#2563eb] text-black font-extrabold px-8 py-4 rounded hover:bg-[#2563eb]/90 transition-colors self-start shadow-sm">
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
