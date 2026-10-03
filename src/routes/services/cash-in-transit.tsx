import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/services/cash-in-transit')({
  component: CashInTransitPage,
})

function CashInTransitPage() {
  const timeline = [
    {
      num: "01",
      title: "OUR APPROACH",
      desc: "Davita Kombat Nigeria Limited provides highly secure Cash-in-Transit (CIT) services for banks, financial institutions, and businesses that require the safe movement of cash and valuables. Our CIT operations are conducted with the highest level of security, utilizing armored vehicles and trained armed operatives.",
      active: false
    },
    {
      num: "02",
      title: "TAILORED SOLUTIONS",
      desc: "Every CIT operation is carefully planned with detailed route analysis, risk assessment, and real-time tracking to minimize exposure and ensure the safe delivery of assets. Our operatives follow strict standard operating procedures and maintain constant communication with our control center throughout each transit.",
      active: false
    },
    {
      num: "03",
      title: "OUR COMMITMENT",
      desc: "We invest continuously in training, technology, and fleet maintenance to uphold the trust our clients place in us for their most sensitive logistics needs.",
      active: true
    }
  ];

  const highlights = [
    "Armored vehicle fleet",
    "Trained and armed CIT operatives",
    "Real-time GPS tracking and monitoring",
    "Detailed route and risk analysis",
    "Strict standard operating procedures",
    "Insurance and liability coverage"
  ];

  const otherServices = [
    { title: "Special Investigation", desc: "Comprehensive investigative services to uncover ...", icon: "/images/security_hero_1.jpg", path: "/services/special-investigation" },
    { title: "Access Control Systems", desc: "Advanced access control solutions to manage an...", icon: "/images/security_hero_2.jpg", path: "/services/access-control" },
    { title: "Escort Services", desc: "Reliable armed and unarmed escort services for p...", icon: "/images/security_hero_3.jpg", path: "/services/escort-services" },
    { title: "Security Equipment", desc: "Supply, installation, and maintenance of professio...", icon: "/images/security_hero_2.jpg", path: "/services/security-equipment" },
    { title: "Maritime Security", desc: "Offshore and maritime security services leveragin...", icon: "/images/security_hero_1.jpg", path: "/services/maritime-security" }
  ];

  // SVG for an armored truck / CIT vehicle
  const CitIcon = () => (
    <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 7h-3V6a4 4 0 00-4-4H4a2 2 0 00-2 2v10h2a3 3 0 106 0h4a3 3 0 106 0h2v-4a4 4 0 00-3-3zm-9 9a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0zm0-5h-4V9h4v2z" />
        <path d="M14 10h-2V7h2v3zm-4 0H8V7h2v3z" />
    </svg>
  );

  return (
    <>
      <Header />
      <main className="w-full pt-[80px] lg:pt-[100px] bg-[#fafafa] min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner (Grid Style) */}
        <section 
            className="w-full relative min-h-[600px] flex items-center bg-[#fafafa]"
            style={{ 
                backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
                backgroundSize: '40px 40px' 
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                        <span className="font-bold tracking-widest uppercase text-xs text-[#2563eb]">Our Services</span>
                        <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                    </div>
                    
                    <h1 className="font-headline-xl text-[48px] lg:text-[72px] font-extrabold leading-tight text-on-surface mb-4">
                        Cash In <span className="text-on-surface">Transit</span>
                    </h1>
                    
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-12 h-[3px] bg-[#2563eb]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    </div>
                    
                    <p className="text-lg text-on-surface-variant font-medium mb-10 max-w-lg">
                        Secure cash and valuables transportation with armored vehicles and trained operatives.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <div className="flex items-center gap-2 bg-white border border-outline-variant/30 rounded-full px-4 py-2 shadow-sm text-sm font-bold text-on-surface-variant">
                            <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            Armored vehicle fleet
                        </div>
                        <div className="flex items-center gap-2 bg-white border border-outline-variant/30 rounded-full px-4 py-2 shadow-sm text-sm font-bold text-on-surface-variant">
                            <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            Trained and armed CIT operatives
                        </div>
                        <div className="flex items-center gap-2 bg-white border border-outline-variant/30 rounded-full px-4 py-2 shadow-sm text-sm font-bold text-on-surface-variant">
                            <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            Real-time GPS tracking and monitoring
                        </div>
                    </div>

                    <Link to="/contact" className="bg-secondary text-on-surface font-extrabold px-8 py-4 w-fit hover:bg-secondary/90 transition-colors shadow-md">
                        Get a Free Consultation
                    </Link>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-[350px] lg:h-[450px] rounded-xl overflow-hidden shadow-xl border-4 border-[#f3e8d5]">
                    <img src="/images/security_hero_1.jpg" alt="Cash In Transit" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded flex items-center justify-center shadow-md">
                        <CitIcon />
                    </div>
                    <div className="absolute bottom-6 left-6 text-white font-extrabold text-lg">
                        Cash In Transit
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-outline-variant">Explore</span>
                <div className="w-5 h-8 rounded-full border-2 border-outline-variant flex justify-center p-1">
                    <div className="w-1 h-2 bg-[#2563eb] rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>

        {/* Section 2: What Sets Us Apart */}
        <section className="w-full py-16 px-6 lg:px-12 bg-[#fafafa]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#f3e8d5] flex items-center justify-center border border-[#2563eb]/30">
                        <CitIcon />
                    </div>
                    <span className="text-[#2563eb] font-bold tracking-widest uppercase text-xs">About This Service</span>
                </div>
                <h2 className="text-4xl font-extrabold text-on-surface mb-12">
                    What Sets Us <span className="border-b-4 border-secondary pb-1">Apart</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Text Box */}
                    <div className="bg-[#f8f9fa] border border-outline-variant/30 rounded-xl p-10 flex flex-col justify-center">
                        <h3 className="text-[#2563eb] font-bold text-xs tracking-widest uppercase mb-6">
                            FIELD READY
                        </h3>
                        <p className="text-on-surface-variant font-medium text-lg leading-relaxed">
                            Secure cash and valuables transportation with armored vehicles and trained operatives.
                        </p>
                    </div>
                    {/* Right Image Box */}
                    <div className="relative rounded-xl overflow-hidden h-[350px] shadow-sm">
                        <img src="/images/security_hero_1.jpg" alt="Armored Fleet" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 bg-[#f3e8d5] px-4 py-2 flex items-center gap-2 rounded shadow-md border border-[#2563eb]/20">
                            <CitIcon />
                            <span className="font-extrabold text-xs text-on-surface">Cash In Transit</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 3: Timeline */}
        <section className="w-full py-12 px-6 lg:px-12 bg-[#fafafa]">
            <div className="max-w-5xl mx-auto flex flex-col">
                {timeline.map((item, index) => (
                    <div key={index} className="flex relative">
                        {/* Vertical Line & Number */}
                        <div className="relative w-24 flex flex-col items-center shrink-0">
                            {/* Line connecting to next item (hide on last) */}
                            {index !== timeline.length - 1 && (
                                <div className="absolute top-14 bottom-[-24px] w-px bg-outline-variant/50"></div>
                            )}
                            <div className="relative z-10 bg-white border border-[#2563eb] rounded-xl w-14 h-14 flex items-center justify-center shadow-sm mt-4">
                                {item.active ? (
                                    <div className="bg-[#3b82f6] text-white font-black text-xl rounded-sm w-8 h-8 flex items-center justify-center">
                                        {item.num}
                                    </div>
                                ) : (
                                    <span className="text-[#2563eb] font-black text-xl">
                                        {item.num}
                                    </span>
                                )}
                            </div>
                        </div>
                        {/* Content Card */}
                        <div className="flex-1 py-4 mb-6">
                            <div className="bg-white border border-outline-variant/30 rounded-lg p-8 shadow-sm">
                                <h3 className="text-[#2563eb] font-bold text-xs tracking-widest uppercase mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-on-surface-variant font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Section 4: Highlights Grid */}
        <section className="w-full py-24 px-6 lg:px-12 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                    <div className="w-8 h-8 bg-[#f3e8d5] flex items-center justify-center rounded border border-[#2563eb]/30">
                        <CitIcon />
                    </div>
                    <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                </div>
                <h2 className="text-4xl font-extrabold text-on-surface mb-4">
                    Key <span className="border-b-4 border-secondary pb-1">Highlights</span>
                </h2>
                <p className="text-on-surface-variant font-medium mb-16 text-center max-w-lg">
                    What makes our cash in transit service stand out from the rest.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {highlights.map((highlight, idx) => (
                        <div key={idx} className="bg-white border border-outline-variant/30 rounded-xl p-8 shadow-sm relative overflow-hidden border-t-4 border-t-[#2563eb]">
                            <div className="absolute top-6 right-6 w-5 h-5 rounded-full bg-[#f3e8d5] flex items-center justify-center">
                                <svg className="w-3 h-3 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-6xl font-black text-outline-variant/20 mb-4 select-none">
                                {(idx + 1).toString().padStart(2, '0')}
                            </div>
                            <h4 className="font-extrabold text-on-surface text-lg leading-snug mb-6 pr-8">
                                {highlight}
                            </h4>
                            <div className="w-6 h-[3px] bg-[#2563eb]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Section 5: Our Other Services */}
        <section className="w-full py-24 px-6 lg:px-12 bg-white border-t border-outline-variant/20">
            <div className="max-w-7xl mx-auto flex flex-col">
                
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-[2px] bg-[#2563eb]"></div>
                            <span className="font-bold tracking-widest uppercase text-xs text-[#2563eb]">Explore More</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-on-surface">
                            Our Other <span className="border-b-4 border-secondary pb-1">Services</span>
                        </h2>
                    </div>
                    <p className="text-on-surface-variant font-medium max-w-sm">
                        Discover the full range of professional security solutions we offer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {otherServices.map((service, idx) => (
                        <Link 
                            key={idx} 
                            to={service.path}
                            className="flex items-center p-4 rounded-xl border border-outline-variant/30 bg-white hover:shadow-md transition-shadow group"
                        >
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 mr-6">
                                <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-1 left-1 bg-white p-1 rounded">
                                    <CitIcon />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 pr-4">
                                <h4 className="font-extrabold text-on-surface mb-1 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-xs text-on-surface-variant line-clamp-1">
                                    {service.desc}
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
