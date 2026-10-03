import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/services/special-investigation')({
  component: SpecialInvestigationPage,
})

function SpecialInvestigationPage() {
  const timeline = [
    {
      num: "01",
      title: "OUR APPROACH",
      desc: "Davita Kombat Nigeria Limited's Special Investigation unit is equipped with skilled investigators who specialize in uncovering facts, gathering intelligence, and providing actionable insights for individuals and organizations. We handle a wide range of investigative assignments with the utmost confidentiality and professionalism.",
      active: false
    },
    {
      num: "02",
      title: "TAILORED SOLUTIONS",
      desc: "From corporate fraud investigations to background checks and due diligence, our team leverages modern investigative techniques and extensive networks to deliver accurate and timely results. We work closely with our clients to understand their specific needs and tailor our approach accordingly.",
      active: false
    },
    {
      num: "03",
      title: "OUR COMMITMENT",
      desc: "Davita Kombat maintains strict ethical standards throughout every investigation, ensuring that all findings are obtained through lawful and transparent methods.",
      active: true
    }
  ];

  const highlights = [
    "Corporate fraud and theft investigation",
    "Background checks and due diligence",
    "Surveillance and intelligence gathering",
    "Asset tracing and recovery support",
    "Pre-employment screening",
    "Confidential reporting and documentation"
  ];

  const otherServices = [
    { title: "Access Control Systems", desc: "Advanced access control solutions to manage an...", icon: "/images/security_hero_2.jpg", path: "/services/access-control-systems" },
    { title: "Escort Services", desc: "Reliable armed and unarmed escort services for p...", icon: "/images/security_hero_3.jpg", path: "/services/escort-services" },
    { title: "Cash In Transit", desc: "Secure cash and valuables transportation with ar...", icon: "/images/security_hero_1.jpg", path: "/services/cash-in-transit" },
    { title: "Security Equipment", desc: "Supply, installation, and maintenance of professio...", icon: "/images/security_hero_2.jpg", path: "/services/security-equipment" },
    { title: "Maritime Security", desc: "Offshore and maritime security services leveragin...", icon: "/images/security_hero_1.jpg", path: "/services/maritime-security" }
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-[#fafafa] min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner */}
        <section className="w-full relative h-[400px] lg:h-[450px] flex items-center bg-[#0a1a33]">
            <div className="absolute inset-0 z-0">
                <img src="/images/security_hero_3.jpg" alt="Special Investigation" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33] via-[#0a1a33]/80 to-[#0a1a33]/40"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full mt-12 text-center flex flex-col items-center">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-[2px] bg-secondary"></div>
                    <span className="font-bold tracking-widest uppercase text-sm text-white">Our Services</span>
                    <div className="w-12 h-[2px] bg-secondary"></div>
                </div>
                <h1 className="font-headline-xl text-[40px] lg:text-[60px] font-extrabold leading-tight text-white mb-6">
                    Special <span className="text-secondary">Investigation</span>
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl font-medium">
                    Comprehensive investigative services to uncover facts, gather intelligence, and provide actionable insights.
                </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafafa] to-transparent z-10"></div>
        </section>

        {/* Section 2: What Sets Us Apart */}
        <section className="w-full py-16 px-6 lg:px-12 bg-[#fafafa]">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#f3e8d5] flex items-center justify-center border border-[#2563eb]/30">
                        <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
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
                            Comprehensive investigative services to uncover facts and provide actionable intelligence.
                        </p>
                    </div>
                    {/* Right Image Box */}
                    <div className="relative rounded-xl overflow-hidden h-[350px] shadow-sm">
                        <img src="/images/security_hero_1.jpg" alt="Investigation Team" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 bg-[#f3e8d5] px-4 py-2 flex items-center gap-2 rounded shadow-md border border-[#2563eb]/20">
                            <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                            </svg>
                            <span className="font-extrabold text-xs text-on-surface">Special Investigation</span>
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

        {/* Section 4: Key Highlights Grid */}
        <section className="w-full py-24 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                    <div className="w-8 h-8 bg-[#f3e8d5] flex items-center justify-center rounded border border-[#2563eb]/30">
                        <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                    </div>
                    <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                </div>
                <h2 className="text-4xl font-extrabold text-on-surface mb-4">
                    Key <span className="border-b-4 border-secondary pb-1">Highlights</span>
                </h2>
                <p className="text-on-surface-variant font-medium mb-16 text-center max-w-lg">
                    What makes our special investigation service stand out from the rest.
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
        <section className="w-full py-24 px-6 lg:px-12 bg-[#fafafa] border-t border-outline-variant/20">
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
                                    <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                    </svg>
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
