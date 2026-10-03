import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/services/maritime-security')({
  component: MaritimeSecurityPage,
})

function MaritimeSecurityPage() {
  const timeline = [
    {
      num: "01",
      title: "OUR APPROACH",
      desc: "Davita Kombat Nigeria Limited In our bid to take full advantage of the Local Content Policy of the Federal Government of Nigeria, Davita Kombat has diversified into the marine sector by offering comprehensive Offshore Security Services. Our maritime security solutions are designed to protect vessels, offshore installations, and port facilities from piracy, theft, and other maritime threats.",
      active: false
    },
    {
      num: "02",
      title: "TAILORED SOLUTIONS",
      desc: "Our maritime security operatives are specially trained for the unique challenges of the marine environment, including vessel protection, anti-piracy measures, and port facility security. We work in compliance with ISPS Code requirements and maintain close coordination with the Nigerian Navy and other relevant maritime authorities.",
      active: false
    },
    {
      num: "03",
      title: "OUR COMMITMENT",
      desc: "Davita Kombat continues to expand its maritime capabilities to meet the growing security demands of Nigeria's oil and gas sector, shipping industry, and coastal operations.",
      active: true
    }
  ];

  const highlights = [
    "Vessel protection and anti-piracy operations",
    "Offshore installation security",
    "Port facility and terminal security",
    "ISPS Code compliance support",
    "Coordination with Nigerian Navy",
    "Oil & gas sector security expertise"
  ];

  const otherServices = [
    { title: "Special Investigation", desc: "Comprehensive investigative services to uncover ...", icon: "/images/security_hero_1.jpg", path: "/services/special-investigation" },
    { title: "Access Control Systems", desc: "Advanced access control solutions to manage an...", icon: "/images/security_hero_2.jpg", path: "/services/access-control" },
    { title: "Escort Services", desc: "Reliable armed and unarmed escort services for p...", icon: "/images/security_hero_3.jpg", path: "/services/escort-services" },
    { title: "Cash In Transit", desc: "Secure cash and valuables transportation with ar...", icon: "/images/security_hero_1.jpg", path: "/services/cash-in-transit" },
    { title: "Reception Protocol", desc: "Professional security receptionists who serve as ...", icon: "/images/security_hero_2.jpg", path: "/services/reception-protocol" }
  ];

  const heroPills = [
    "Vessel protection and anti-piracy operations",
    "Offshore installation security",
    "Port facility and terminal security"
  ];

  // Anchor Icon
  const AnchorIcon = () => (
    <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M13 7.07V10H16C16 10 16 12 14.28 12C12.56 12 13 15 13 15V19.93C17.06 19.43 20 15.65 20 11H22C22 16.5 17.5 21 12 21C6.5 21 2 16.5 2 11H4C4 15.65 6.94 19.43 11 19.93V15C11 15 11.44 12 9.72 12C8 12 8 10 8 10H11V7.07C7.61 7.55 5 10.46 5 14H3C3 9.4 6.7 5.56 11.23 5.07L12 7L12.77 5.07C17.3 5.56 21 9.4 21 14H19C19 10.46 16.39 7.55 13 7.07Z" />
    </svg>
  );

  return (
    <>
      <Header />
      <main className="w-full pt-[80px] lg:pt-[100px] bg-[#fafafa] min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner (Split Light Grid Style) */}
        <section className="w-full relative min-h-[600px] flex items-center bg-[#fdfbf7] border-b border-outline-variant/20 overflow-hidden">
            {/* Grid Background */}
            <div 
                className="absolute inset-0 z-0 opacity-50"
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(139, 90, 43, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 90, 43, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px' 
                }}
            ></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-[2px] bg-[#2563eb]"></div>
                        <span className="font-bold tracking-widest uppercase text-xs text-[#2563eb]">OUR SERVICES</span>
                        <div className="w-12 h-[2px] bg-[#2563eb]"></div>
                    </div>
                    
                    <h1 className="text-[48px] lg:text-[64px] font-black text-on-surface leading-tight mb-6 tracking-tight">
                        Maritime Security
                    </h1>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-[3px] bg-[#2563eb]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#2563eb]"></div>
                    </div>
                    
                    <p className="text-lg text-on-surface-variant font-medium mb-10 max-w-lg leading-relaxed">
                        Offshore and maritime security services leveraging Nigeria's Local Content Policy.
                    </p>

                    {/* Features Pills */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {heroPills.map((pill, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-white border border-outline-variant/30 rounded-md px-4 py-2 shadow-sm text-sm font-bold text-on-surface">
                                <div className="w-4 h-4 rounded-full bg-[#f3e8d5] flex items-center justify-center shrink-0">
                                    <svg className="w-2.5 h-2.5 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {pill}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center">
                        <Link to="/contact" className="bg-secondary text-on-surface font-extrabold px-8 py-4 rounded hover:bg-secondary/90 transition-colors shadow-md">
                            Get a Free Consultation
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] border border-[#f3e8d5]">
                    <img src="/images/security_hero_3.jpg" alt="Maritime Security Boat" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Top Left Icon Badge */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-outline-variant/20">
                        <AnchorIcon />
                    </div>

                    {/* Bottom Left Label */}
                    <div className="absolute bottom-6 left-6">
                        <h3 className="text-white font-bold text-lg">Maritime Security</h3>
                    </div>
                </div>
                
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="text-[10px] font-bold tracking-widest text-outline-variant uppercase mb-2">EXPLORE</span>
                <div className="w-5 h-8 border-2 border-outline-variant rounded-full flex justify-center pt-1">
                    <div className="w-1 h-2 bg-outline-variant rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>

        {/* Section 2: What Sets Us Apart */}
        <section className="w-full py-16 px-6 lg:px-12 bg-[#fafafa]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#f3e8d5] flex items-center justify-center border border-[#2563eb]/30">
                        <AnchorIcon />
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
                            Offshore and maritime security services leveraging Nigeria's Local Content Policy.
                        </p>
                    </div>
                    {/* Right Image Box */}
                    <div className="relative rounded-xl overflow-hidden h-[350px] shadow-sm border border-outline-variant/20">
                        <img src="/images/security_hero_1.jpg" alt="Maritime Guards" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 bg-[#f3e8d5] px-4 py-2 flex items-center gap-2 rounded shadow-md border border-[#2563eb]/20">
                            <AnchorIcon />
                            <span className="font-extrabold text-xs text-on-surface">Maritime Security</span>
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
                        <AnchorIcon />
                    </div>
                    <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                </div>
                <h2 className="text-4xl font-extrabold text-on-surface mb-4">
                    Key <span className="border-b-4 border-secondary pb-1">Highlights</span>
                </h2>
                <p className="text-on-surface-variant font-medium mb-16 text-center max-w-lg">
                    What makes our maritime security service stand out from the rest.
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
                                    <AnchorIcon />
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
