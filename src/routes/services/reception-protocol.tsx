import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/services/reception-protocol')({
  component: ReceptionProtocolPage,
})

function ReceptionProtocolPage() {
  const timeline = [
    {
      num: "01",
      title: "OUR APPROACH",
      desc: "Davita Kombat Nigeria Limited recognises that the post of Security / Protocol Receptionist is one of the most important in your organisation. This is because the receptionist is often the first point of contact between your customers and your company. Davita Kombat provides well-trained, presentable, and professional security receptionists who combine excellent customer service skills with security awareness.",
      active: false
    },
    {
      num: "02",
      title: "TAILORED SOLUTIONS",
      desc: "Our reception protocol officers are trained to manage visitor access, maintain logs, screen calls, and provide a welcoming yet secure environment at your front desk. They are skilled in conflict resolution, emergency communication, and access control procedures.",
      active: false
    },
    {
      num: "03",
      title: "OUR COMMITMENT",
      desc: "We tailor our reception security services to match the culture and operational requirements of each client, ensuring a seamless blend of hospitality and security at every point of entry.",
      active: true
    }
  ];

  const highlights = [
    "Professional and presentable personnel",
    "Visitor access management and logging",
    "Call screening and front desk management",
    "Emergency communication protocols",
    "Customer service excellence",
    "Customized to client brand and culture"
  ];

  const otherServices = [
    { title: "Special Investigation", desc: "Comprehensive investigative services to uncover ...", icon: "/images/security_hero_1.jpg", path: "/services/special-investigation" },
    { title: "Access Control Systems", desc: "Advanced access control solutions to manage an...", icon: "/images/security_hero_2.jpg", path: "/services/access-control" },
    { title: "Escort Services", desc: "Reliable armed and unarmed escort services for p...", icon: "/images/security_hero_3.jpg", path: "/services/escort-services" },
    { title: "Cash In Transit", desc: "Secure cash and valuables transportation with ar...", icon: "/images/security_hero_1.jpg", path: "/services/cash-in-transit" },
    { title: "Maritime Security", desc: "Offshore and maritime security services leveragin...", icon: "/images/security_hero_2.jpg", path: "/services/maritime-security" }
  ];

  // SVG for a Reception Bell icon
  const BellIcon = () => (
    <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a6 6 0 00-6 6v3.17c-.4.21-.77.49-1.08.83L3 14v2h18v-2l-1.92-2c-.31-.34-.68-.62-1.08-.83V8a6 6 0 00-6-6zm0 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" />
    </svg>
  );

  return (
    <>
      <Header />
      <main className="w-full pt-[80px] lg:pt-[100px] bg-[#fafafa] min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner (Centered CTA Style) */}
        <section className="w-full relative min-h-[600px] flex items-center justify-center bg-black">
            <div className="absolute inset-0 z-0">
                <img src="/images/security_hero_1.jpg" alt="Reception Protocol" className="w-full h-full object-cover opacity-30" />
                {/* Grid Overlay */}
                <div 
                    className="absolute inset-0 bg-black/50"
                    style={{ 
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '40px 40px' 
                    }}
                ></div>
            </div>
            
            <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 w-full py-24 flex flex-col items-center text-center">
                
                {/* Icon Badge */}
                <div className="w-16 h-16 bg-[#1a1a1a] border border-[#2563eb]/30 rounded-xl flex items-center justify-center mb-8 rotate-45 transform transition-transform hover:rotate-0 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                    <div className="-rotate-45 transform">
                        <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a6 6 0 00-6 6v3.17c-.4.21-.77.49-1.08.83L3 14v2h18v-2l-1.92-2c-.31-.34-.68-.62-1.08-.83V8a6 6 0 00-6-6zm0 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" />
                        </svg>
                    </div>
                </div>

                <h3 className="font-bold tracking-[0.2em] uppercase text-xs text-secondary mb-4">
                    READY TO GET STARTED?
                </h3>
                
                <h1 className="font-headline-xl text-[48px] lg:text-[72px] font-extrabold leading-[1.1] text-white mb-6">
                    Need Professional <br/><span className="text-secondary">Reception Protocol?</span>
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[1px] bg-secondary/50"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-12 h-[1px] bg-secondary/50"></div>
                </div>
                
                <p className="text-lg text-white/80 font-medium mb-12 max-w-2xl">
                    Professional security receptionists who serve as the first point of contact for your organization.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link to="/contact" className="bg-secondary text-on-surface font-extrabold px-8 py-4 flex items-center gap-2 hover:bg-secondary/90 transition-colors w-full sm:w-auto justify-center rounded-sm">
                        Get a Free Consultation 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                    <a href="tel:08031696371" className="bg-transparent border border-outline-variant/30 text-white font-extrabold px-8 py-4 flex items-center gap-2 hover:bg-white/5 transition-colors w-full sm:w-auto justify-center rounded-sm">
                        <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                        Call Us Now
                    </a>
                </div>
            </div>
        </section>

        {/* Section 2: What Sets Us Apart */}
        <section className="w-full py-16 px-6 lg:px-12 bg-[#fafafa]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#f3e8d5] flex items-center justify-center border border-[#2563eb]/30">
                        <BellIcon />
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
                            Professional security receptionists who serve as the first point of contact for your organization.
                        </p>
                    </div>
                    {/* Right Image Box */}
                    <div className="relative rounded-xl overflow-hidden h-[350px] shadow-sm">
                        <img src="/images/security_hero_2.jpg" alt="Reception Desk" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 bg-[#f3e8d5] px-4 py-2 flex items-center gap-2 rounded shadow-md border border-[#2563eb]/20">
                            <BellIcon />
                            <span className="font-extrabold text-xs text-on-surface">Reception Protocol</span>
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
                        <BellIcon />
                    </div>
                    <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                </div>
                <h2 className="text-4xl font-extrabold text-on-surface mb-4">
                    Key <span className="border-b-4 border-secondary pb-1">Highlights</span>
                </h2>
                <p className="text-on-surface-variant font-medium mb-16 text-center max-w-lg">
                    What makes our reception protocol service stand out from the rest.
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
                                    <BellIcon />
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
