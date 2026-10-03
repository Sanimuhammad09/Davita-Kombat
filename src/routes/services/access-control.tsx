import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useState } from 'react'

export const Route = createFileRoute('/services/access-control')({
  component: AccessControlPage,
})

function AccessControlPage() {
  const [activeHighlight, setActiveHighlight] = useState(0);

  const timeline = [
    {
      num: "01",
      title: "OUR APPROACH",
      desc: "Davita Kombat Nigeria Limited offers state-of-the-art Access Control Systems designed to manage, monitor, and restrict access to your premises. Our solutions range from electronic card readers and biometric systems to advanced visitor management platforms.",
      active: false
    },
    {
      num: "02",
      title: "TAILORED SOLUTIONS",
      desc: "We work with organizations of all sizes to design and implement access control solutions that integrate seamlessly with existing security infrastructure. Our systems provide real-time monitoring, detailed access logs, and customizable permissions to ensure that only authorized personnel gain entry to secured areas.",
      active: false
    },
    {
      num: "03",
      title: "OUR COMMITMENT",
      desc: "Our team of security technology experts handles the full lifecycle from consultation and design through installation, training, and ongoing maintenance support.",
      active: true
    }
  ];

  const features = [
    "Biometric and card-based access systems",
    "Visitor management solutions",
    "Real-time monitoring and alerts",
    "Integration with CCTV and alarm systems",
    "Customizable access levels and permissions",
    "Installation, training, and maintenance support"
  ];

  const highlights = [
    {
      id: 0,
      title: "Gate access supervision",
      image: "/images/security_hero_1.jpg"
    },
    {
      id: 1,
      title: "Entry-point discipline",
      image: "/images/security_hero_2.jpg"
    },
    {
      id: 2,
      title: "Under-vehicle inspection support",
      image: "/images/security_hero_3.jpg"
    }
  ];

  const otherServices = [
    { title: "Special Investigation", desc: "Comprehensive investigative services to uncover ...", icon: "/images/security_hero_1.jpg", path: "/services/special-investigation" },
    { title: "Escort Services", desc: "Reliable armed and unarmed escort services for p...", icon: "/images/security_hero_3.jpg", path: "/services/escort-services" },
    { title: "Cash In Transit", desc: "Secure cash and valuables transportation with ar...", icon: "/images/security_hero_1.jpg", path: "/services/cash-in-transit" },
    { title: "Security Equipment", desc: "Supply, installation, and maintenance of professio...", icon: "/images/security_hero_2.jpg", path: "/services/security-equipment" },
    { title: "Maritime Security", desc: "Offshore and maritime security services leveragin...", icon: "/images/security_hero_1.jpg", path: "/services/maritime-security" }
  ];

  // SVG for fingerprint / access control icon
  const FingerprintIcon = () => (
    <svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
    </svg>
  );

  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-[#fafafa] min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner */}
        <section className="w-full relative h-[400px] lg:h-[450px] flex items-center bg-[#0a1a33]">
            <div className="absolute inset-0 z-0">
                <img src="/images/security_hero_2.jpg" alt="Access Control Systems" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33] via-[#0a1a33]/80 to-[#0a1a33]/40"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full mt-12 text-center flex flex-col items-center">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-[2px] bg-secondary"></div>
                    <span className="font-bold tracking-widest uppercase text-sm text-white">Our Services</span>
                    <div className="w-12 h-[2px] bg-secondary"></div>
                </div>
                <h1 className="font-headline-xl text-[40px] lg:text-[60px] font-extrabold leading-tight text-white mb-6">
                    Access <span className="text-secondary">Control</span>
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl font-medium">
                    Advanced access control solutions to manage, monitor, and restrict entry points across your facilities.
                </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafafa] to-transparent z-10"></div>
        </section>

        {/* Section 2: What Sets Us Apart */}
        <section className="w-full py-16 px-6 lg:px-12 bg-[#fafafa]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#f3e8d5] flex items-center justify-center border border-[#2563eb]/30">
                        <FingerprintIcon />
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
                            Advanced access control solutions to manage and monitor entry points across your facilities.
                        </p>
                    </div>
                    {/* Right Image Box */}
                    <div className="relative rounded-xl overflow-hidden h-[350px] shadow-sm">
                        <img src="/images/security_hero_3.jpg" alt="Access Control Guard" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 bg-[#f3e8d5] px-4 py-2 flex items-center gap-2 rounded shadow-md border border-[#2563eb]/20">
                            <FingerprintIcon />
                            <span className="font-extrabold text-xs text-on-surface">Access Control Systems</span>
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

        {/* Section 4: Features Grid */}
        <section className="w-full py-16 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
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
                            {feature}
                        </h4>
                        <div className="w-6 h-[3px] bg-[#2563eb]"></div>
                    </div>
                ))}
            </div>
        </section>

        {/* Section 5: Key Highlights (Interactive) */}
        <section className="w-full py-24 px-6 lg:px-12 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                    <div className="w-8 h-8 bg-[#f3e8d5] flex items-center justify-center rounded border border-[#2563eb]/30">
                        <FingerprintIcon />
                    </div>
                    <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                </div>
                <h2 className="text-4xl font-extrabold text-on-surface mb-4">
                    Key <span className="border-b-4 border-secondary pb-1">Highlights</span>
                </h2>
                <p className="text-on-surface-variant font-medium mb-16 text-center max-w-lg">
                    What makes our access control systems service stand out from the rest.
                </p>

                {/* Interactive Display */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
                    {/* Main Image */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px] bg-black">
                        <img 
                            src={highlights[activeHighlight].image} 
                            alt={highlights[activeHighlight].title}
                            className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                            <p className="text-white/70 font-bold text-xs tracking-widest uppercase mb-1">
                                FIELD VISUAL
                            </p>
                            <h3 className="text-white font-extrabold text-2xl">
                                {highlights[activeHighlight].title}
                            </h3>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex flex-col gap-4">
                        {highlights.map((item) => {
                            const isActive = activeHighlight === item.id;
                            return (
                                <div 
                                    key={item.id}
                                    onClick={() => setActiveHighlight(item.id)}
                                    className={`
                                        cursor-pointer flex items-center p-4 rounded-xl border bg-white transition-all
                                        ${isActive ? 'border-secondary shadow-md' : 'border-outline-variant/30 hover:border-outline-variant/60'}
                                    `}
                                >
                                    <div className="w-20 h-14 rounded-md overflow-hidden bg-surface-container shrink-0 mr-4">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-extrabold text-on-surface text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-on-surface-variant">
                                            {isActive ? 'Currently displayed' : 'Show image'}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>

        {/* Section 6: Our Other Services */}
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
                                    <FingerprintIcon />
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
