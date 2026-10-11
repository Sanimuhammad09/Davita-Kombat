import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/services/car-tracking')({
  component: CarTrackingPage,
})

function CarTrackingPage() {
  const features = [
    {
      num: "01",
      title: "REAL-TIME GPS TELEMETRY",
      desc: "Live satellite vehicle monitoring with second-by-second coordinate updates, speed alerts, route tracking, and ignition telemetry visible from our 24/7 Command Center or your mobile device.",
    },
    {
      num: "02",
      title: "REMOTE ENGINE IMMOBILIZATION",
      desc: "Instant remote shutdown command execution capable of disabling stolen or unauthorized vehicles safely at the touch of a button via encrypted satellite/GSM control.",
    },
    {
      num: "03",
      title: "GEOFENCING & ZONE RESTRICTIONS",
      desc: "Custom virtual boundaries across high-risk zones, state borders, and operating corridors with automated instant alarm triggers when vehicles cross specified parameters.",
    },
    {
      num: "04",
      title: "RAPID RECOVERY DISPATCH",
      desc: "Dedicated armed rapid response units on standby across Nigerian metropolitan hubs, ready to intercept, recover, and secure flagged vehicles within minutes.",
    }
  ];

  const highlights = [
    "High-accuracy satellite GPS & 4G/GSM dual tracking",
    "Remote engine cut-off and immobilization",
    "Geo-fencing and route deviation alerts",
    "Driver behavior, overspeeding & idling telemetry",
    "Fleet management dashboard with historical reports",
    "24/7 Davita Kombat Central Command Support"
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-[80px] lg:pt-[100px] bg-[#fafafa] min-h-[calc(100vh-120px)]">
        
        {/* Hero Section */}
        <section 
            className="w-full relative min-h-[600px] flex items-center bg-[#fafafa]"
            style={{ 
                backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
                backgroundSize: '40px 40px' 
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                        <span className="font-bold tracking-widest uppercase text-xs text-[#2563eb]">Fleet Telemetry &amp; Security</span>
                        <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                    </div>
                    
                    <h1 className="font-headline-xl text-[40px] sm:text-[48px] lg:text-[64px] font-extrabold leading-tight text-on-surface mb-4">
                        Car Tracking <span className="text-[#2563eb]">Services</span>
                    </h1>
                    
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-12 h-[3px] bg-[#2563eb]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    </div>
                    
                    <p className="text-lg text-on-surface-variant font-medium mb-10 max-w-lg leading-relaxed">
                        Cutting-edge satellite GPS tracking, anti-theft immobilization, and 24/7 rapid recovery for corporate fleets, private vehicles, and logistics haulage across Nigeria.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {highlights.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-white border border-outline-variant/30 rounded-full px-4 py-2 shadow-sm text-sm font-bold text-on-surface-variant">
                              <span className="material-symbols-outlined text-[18px] text-[#2563eb]">gps_fixed</span>
                              {item}
                          </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="bg-[#2563eb] text-white font-extrabold px-8 py-4 rounded-lg hover:bg-blue-600 transition-all shadow-md hover:scale-105">
                          Install Vehicle Tracker
                      </Link>
                      <a href="tel:08031696371" className="bg-white border border-outline-variant/30 text-on-surface font-extrabold px-6 py-4 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
                          <span className="material-symbols-outlined text-[#2563eb] text-[20px]">phone</span>
                          <span>Inquire Tracking Packages</span>
                      </a>
                    </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative w-full h-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group"
                >
                    <img src="/images/security_equipment.jpg" alt="Car Tracking Telemetry Device" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#0b1c30]/90 backdrop-blur-md rounded-lg text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping"></span>
                        LIVE SATELLITE GPS ACTIVE
                    </div>
                    <div className="absolute bottom-6 left-6 text-white font-extrabold text-xl">
                        Davita Smart Telemetry Grid
                    </div>
                </motion.div>

            </div>
        </section>

        {/* Feature Grid */}
        <section className="w-full py-20 px-6 lg:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#2563eb] font-bold tracking-widest uppercase text-xs">Capabilities</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mt-2">Enterprise GPS &amp; Fleet Protection</h2>
                    <p className="text-on-surface-variant font-medium mt-4">
                      Protect your automotive investments from unauthorized movement, carjacking, and diversion with military-grade tracking sensors and instant recovery units.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((item, idx) => (
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Enterprise Banner */}
        <section className="w-full py-16 px-6 lg:px-12 bg-surface">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#0b1c30] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#3b82f6] font-bold text-xs uppercase tracking-widest">Fleet &amp; Single Vehicles</span>
                            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-6">Complete Visibility Across Nigerian Roads</h2>
                            <p className="text-white/70 font-medium leading-relaxed mb-8">
                              Our systems operate nationwide with redundant SIM carrier fallback, ensuring constant tracking even in remote transit corridors.
                            </p>
                            <Link to="/contact" className="bg-[#2563eb] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all inline-block">
                              Schedule Installation
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                    <span className="material-symbols-outlined text-[#3b82f6] text-[20px] mt-0.5">check_circle</span>
                                    <span className="text-sm font-semibold text-white/90">{h}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
