import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useState } from 'react'

export const Route = createFileRoute('/services/security-equipment')({
  component: SecurityEquipmentPage,
})

function SecurityEquipmentPage() {
  const [activeEquipment, setActiveEquipment] = useState(0);

  const timeline = [
    {
      num: "01",
      title: "OUR APPROACH",
      desc: "Davita Kombat Nigeria Limited supplies, installs, and maintains a comprehensive range of professional-grade security equipment to meet the needs of residential, commercial, and industrial clients. Our product offerings include CCTV cameras, intruder alarm systems, fire detection systems, metal detectors, and perimeter fencing solutions.",
      active: false
    },
    {
      num: "02",
      title: "TAILORED SOLUTIONS",
      desc: "Davita Kombat works closely with leading technology partners to source reliable and cutting-edge security equipment. Our technical team provides expert consultation to help clients select the right solutions for their specific security challenges, followed by professional installation and commissioning.",
      active: false
    },
    {
      num: "03",
      title: "OUR COMMITMENT",
      desc: "We also offer after-sales support including scheduled maintenance, system upgrades, and 24/7 technical assistance to ensure your security systems remain fully operational at all times.",
      active: true
    }
  ];

  const features = [
    "CCTV surveillance systems",
    "Intruder and fire alarm systems",
    "Metal detectors and screening equipment",
    "Perimeter fencing and barriers",
    "Professional installation and commissioning",
    "Ongoing maintenance and technical support"
  ];

  const galleryItems = [
    { id: 0, title: "Security Equipment 1", image: "/images/security_hero_1.jpg" },
    { id: 1, title: "Security Equipment 2", image: "/images/security_hero_2.jpg" },
    { id: 2, title: "Security Equipment 3", image: "/images/security_hero_3.jpg" },
    { id: 3, title: "Security Equipment 4", image: "/images/security_hero_1.jpg" },
    { id: 4, title: "Security Equipment 5", image: "/images/security_hero_2.jpg" },
    { id: 5, title: "Security Equipment 6", image: "/images/security_hero_3.jpg" },
    { id: 6, title: "Security Equipment 7", image: "/images/security_hero_1.jpg" },
  ];

  const otherServices = [
    { title: "Special Investigation", desc: "Comprehensive investigative services to uncover ...", icon: "/images/security_hero_1.jpg", path: "/services/special-investigation" },
    { title: "Access Control Systems", desc: "Advanced access control solutions to manage an...", icon: "/images/security_hero_2.jpg", path: "/services/access-control" },
    { title: "Escort Services", desc: "Reliable armed and unarmed escort services for p...", icon: "/images/security_hero_3.jpg", path: "/services/escort-services" },
    { title: "Cash In Transit", desc: "Secure cash and valuables transportation with ar...", icon: "/images/security_hero_1.jpg", path: "/services/cash-in-transit" },
    { title: "Maritime Security", desc: "Offshore and maritime security services leveragin...", icon: "/images/security_hero_2.jpg", path: "/services/maritime-security" }
  ];

  // SVG for Camera / Equipment icon
  const CameraIcon = () => (
    <svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );

  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-[#fafafa] min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner */}
        <section className="w-full relative h-[400px] lg:h-[450px] flex items-center bg-[#0a1a33]">
            <div className="absolute inset-0 z-0">
                <img src="/images/security_hero_2.jpg" alt="Security Equipment" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33] via-[#0a1a33]/80 to-[#0a1a33]/40"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full mt-12 text-center flex flex-col items-center">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-[2px] bg-secondary"></div>
                    <span className="font-bold tracking-widest uppercase text-sm text-white">Our Services</span>
                    <div className="w-12 h-[2px] bg-secondary"></div>
                </div>
                <h1 className="font-headline-xl text-[40px] lg:text-[60px] font-extrabold leading-tight text-white mb-6">
                    Security <span className="text-secondary">Equipment</span>
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl font-medium">
                    Supply, installation, and maintenance of professional-grade security equipment for all your needs.
                </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafafa] to-transparent z-10"></div>
        </section>

        {/* Section 2: Timeline */}
        <section className="w-full py-16 px-6 lg:px-12 bg-[#fafafa]">
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

        {/* Section 3: Features Grid */}
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

        {/* Section 4: Key Highlights (Interactive Gallery) */}
        <section className="w-full py-24 px-6 lg:px-12 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                    <div className="w-8 h-8 bg-[#f3e8d5] flex items-center justify-center rounded border border-[#2563eb]/30">
                        <CameraIcon />
                    </div>
                    <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                </div>
                <h2 className="text-4xl font-extrabold text-on-surface mb-4">
                    Key <span className="border-b-4 border-secondary pb-1">Highlights</span>
                </h2>
                <p className="text-on-surface-variant font-medium mb-16 text-center max-w-lg">
                    What makes our security equipment service stand out from the rest.
                </p>

                {/* Interactive Display */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
                    {/* Main Image */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg h-[600px] bg-black">
                        <img 
                            src={galleryItems[activeEquipment].image} 
                            alt={galleryItems[activeEquipment].title}
                            className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                            <p className="text-white/70 font-bold text-xs tracking-widest uppercase mb-1">
                                EQUIPMENT FOCUS
                            </p>
                            <h3 className="text-white font-extrabold text-2xl">
                                {galleryItems[activeEquipment].title}
                            </h3>
                        </div>
                    </div>

                    {/* Thumbnails (Scrollable) */}
                    <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                        {galleryItems.map((item) => {
                            const isActive = activeEquipment === item.id;
                            return (
                                <div 
                                    key={item.id}
                                    onClick={() => setActiveEquipment(item.id)}
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
                                    <CameraIcon />
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
