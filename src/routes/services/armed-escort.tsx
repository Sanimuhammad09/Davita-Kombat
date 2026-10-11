import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/services/armed-escort')({
  component: ArmedEscortPage,
})

function ArmedEscortPage() {
  const timeline = [
    {
      num: "01",
      title: "TACTICAL RECONNAISSANCE",
      desc: "Davita Kombat executes comprehensive advance route intelligence and threat assessments before any armed convoy departs. Our tactical planners identify secure waypoints, safe havens, and rapid emergency extract routes across Nigerian intra and interstate corridors.",
      active: false
    },
    {
      num: "02",
      title: "ARMED CONVOY INTERCEPT",
      desc: "Equipped with certified tactical response personnel and reinforced lead and chase vehicles, our armed escort details provide continuous 360-degree perimeter protection against ambush, banditry, and unauthorized vehicle interference.",
      active: false
    },
    {
      num: "03",
      title: "NATIONWIDE INTERSTATE TRANSIT",
      desc: "Operating seamlessly across all 36 Nigerian states and the FCT, we coordinate directly with state commands and tactical dispatch hubs to ensure uninterrupted security and zero-incident delivery from origin to destination.",
      active: true
    }
  ];

  const highlights = [
    "Intra-city and Interstate armed escort convoys",
    "Reinforced lead and chase tactical security vehicles",
    "Real-time GPS satellite convoy telemetry tracking",
    "Armed rapid reaction force deployment",
    "High-threat corridor transit & route clearance",
    "24/7 Central Command & Control monitoring"
  ];

  const otherServices = [
    { title: "Escort/Protocol Services", desc: "VIP reception and protocol handling...", icon: "/images/escort_services.jpg", path: "/services/escort-services" },
    { title: "Car Tracking Services", desc: "GPS satellite tracking and vehicle recovery...", icon: "/images/security_equipment.jpg", path: "/services/car-tracking" },
    { title: "Risk Analysis & Management", desc: "Threat vulnerability audits and risk plans...", icon: "/images/command_control.jpg", path: "/services/risk-analysis" },
    { title: "Secured Transport", desc: "Armored bullion and high-value cargo...", icon: "/images/cash_in_transit.jpg", path: "/services/secured-transport" },
    { title: "Manned Guarding", desc: "Elite static guards and perimeter security...", icon: "/images/security_hero_1.jpg", path: "/services/manned-guarding" }
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-[80px] lg:pt-[100px] bg-[#fafafa] min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner */}
        <section 
            className="w-full relative min-h-[600px] flex items-center bg-[#fafafa]"
            style={{ 
                backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
                backgroundSize: '40px 40px' 
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                        <span className="font-bold tracking-widest uppercase text-xs text-[#2563eb]">Tactical Operations</span>
                        <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                    </div>
                    
                    <h1 className="font-headline-xl text-[40px] sm:text-[48px] lg:text-[64px] font-extrabold leading-tight text-on-surface mb-4">
                        Armed Escort / <span className="text-[#2563eb]">Protocol Service</span>
                    </h1>
                    <span className="text-sm font-bold uppercase tracking-wider text-[#2563eb] mb-4">
                      Intra &amp; Interstate High-Security Escort
                    </span>
                    
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-12 h-[3px] bg-[#2563eb]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    </div>
                    
                    <p className="text-lg text-on-surface-variant font-medium mb-10 max-w-lg leading-relaxed">
                        Tactical armed escort protection for corporate personnel, VIPs, high-value freight, and specialized convoys moving within cities and across Nigerian state borders.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {highlights.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-white border border-outline-variant/30 rounded-full px-4 py-2 shadow-sm text-sm font-bold text-on-surface-variant">
                              <span className="material-symbols-outlined text-[18px] text-[#2563eb]">shield</span>
                              {item}
                          </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="bg-[#2563eb] text-white font-extrabold px-8 py-4 rounded-lg hover:bg-blue-600 transition-all shadow-md hover:scale-105">
                          Request Armed Escort
                      </Link>
                      <a href="tel:08021179415" className="bg-white border border-outline-variant/30 text-on-surface font-extrabold px-6 py-4 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
                          <span className="material-symbols-outlined text-[#2563eb] text-[20px]">phone</span>
                          <span>24/7 Hotline</span>
                      </a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative w-full h-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group"
                >
                    <img src="/images/escort_services.jpg" alt="Armed Escort Tactical Vehicle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#0b1c30]/90 backdrop-blur-md rounded-lg text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping"></span>
                        INTERSTATE HIGHWAY DEFENSE
                    </div>
                    <div className="absolute bottom-6 left-6 text-white font-extrabold text-xl">
                        Armed Escort / Protocol Service
                    </div>
                </motion.div>

            </div>
        </section>

        {/* Section 2: Detailed Pillars */}
        <section className="w-full py-20 px-6 lg:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#2563eb] font-bold tracking-widest uppercase text-xs">Tactical Standards</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mt-2">Comprehensive Highway &amp; Urban Protection</h2>
                    <p className="text-on-surface-variant font-medium mt-4">
                      Our armed escort operatives undergo rigorous NSCDC tactical training, defensive driving, route threat profiling, and anti-ambush tactics to guarantee absolute travel security.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {timeline.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          whileHover={{ y: -6 }}
                          className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/20 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-4xl font-black text-[#2563eb] opacity-80 block mb-4">{item.num}</span>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-on-surface-variant text-sm font-medium leading-relaxed">{item.desc}</p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center text-xs font-bold text-[#2563eb] uppercase tracking-wider">
                                Operational Mandate
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Section 3: Operational Highlights Grid */}
        <section className="w-full py-16 px-6 lg:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#0b1c30] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#3b82f6] font-bold text-xs uppercase tracking-widest">Readiness Checklist</span>
                            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-6">Why Corporations Trust Davita Kombat Armed Escorts</h2>
                            <p className="text-white/70 font-medium leading-relaxed mb-8">
                              We protect executive personnel, expatriate delegates, high-value bullion, and supply-chain logistics through disciplined deployment, live telemetry, and rapid escalation protocols.
                            </p>
                            <Link to="/contact" className="bg-[#2563eb] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all inline-block">
                              Book Escort Deployment
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                    <span className="material-symbols-outlined text-[#3b82f6] text-[20px] mt-0.5">verified</span>
                                    <span className="text-sm font-semibold text-white/90">{h}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 4: Other Services */}
        <section className="w-full py-20 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <span className="text-[#2563eb] font-bold tracking-widest uppercase text-xs">Explore More</span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mt-1">Other Security Capabilities</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherServices.slice(0, 3).map((item, idx) => (
                        <motion.div key={idx} whileHover={{ y: -5 }} className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                                <p className="text-sm text-on-surface-variant font-medium leading-relaxed mb-4">{item.desc}</p>
                            </div>
                            <Link to={item.path} className="text-[#2563eb] font-bold text-sm hover:underline inline-flex items-center gap-1">
                                <span>Learn More</span>
                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
