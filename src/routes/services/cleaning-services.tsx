import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/services/cleaning-services')({
  component: CleaningServicesPage,
})

function CleaningServicesPage() {
  const categories = [
    {
      num: "01",
      title: "CORPORATE & COMMERCIAL JANITORIAL",
      desc: "Daily, weekly, and customized commercial cleaning solutions for corporate headquarters, banks, tech hubs, diplomatic offices, and commercial high-rises.",
    },
    {
      num: "02",
      title: "INDUSTRIAL & WAREHOUSE HYGIENE",
      desc: "Heavy-duty cleaning, floor scrubbing, degreasing, and sanitation for manufacturing plants, distribution hubs, storage warehouses, and logistics yards.",
    },
    {
      num: "03",
      title: "POST-CONSTRUCTION CLEANUP",
      desc: "Deep debris extraction, hazardous dust filtration, paint splatter removal, and pristine restorative detailing for newly completed commercial and residential real estate.",
    },
    {
      num: "04",
      title: "FUMIGATION & PEST CONTROL",
      desc: "EPA-approved eco-friendly disinfection, deep fumigation, rodent control, and biological sanitization services ensuring compliant and hygienic facilities.",
    }
  ];

  const highlights = [
    "Trained, background-checked and uniformed janitorial teams",
    "Eco-friendly, hospital-grade cleaning agents and disinfectants",
    "Flexible schedules: after-hours, overnight, and daily maintenance",
    "Floor buffing, terrazzo restoration and carpet steam extraction",
    "Comprehensive post-construction detailing and site handover",
    "Dedicated quality assurance supervisors for each site"
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
                        <span className="font-bold tracking-widest uppercase text-xs text-[#2563eb]">Facility Management &amp; Hygiene</span>
                        <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                    </div>
                    
                    <h1 className="font-headline-xl text-[40px] sm:text-[48px] lg:text-[64px] font-extrabold leading-tight text-on-surface mb-4">
                        Cleaning <span className="text-[#2563eb]">Services</span>
                    </h1>
                    
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-12 h-[3px] bg-[#2563eb]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    </div>
                    
                    <p className="text-lg text-on-surface-variant font-medium mb-10 max-w-lg leading-relaxed">
                        Pristine corporate janitorial maintenance, industrial facility hygiene, post-construction cleanup, and specialized fumigation tailored for modern businesses across Nigeria.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {highlights.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-white border border-outline-variant/30 rounded-full px-4 py-2 shadow-sm text-sm font-bold text-on-surface-variant">
                              <span className="material-symbols-outlined text-[18px] text-[#2563eb]">cleaning_services</span>
                              {item}
                          </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="bg-[#2563eb] text-white font-extrabold px-8 py-4 rounded-lg hover:bg-blue-600 transition-all shadow-md hover:scale-105">
                          Request Cleaning Quote
                      </Link>
                      <a href="tel:08031696371" className="bg-white border border-outline-variant/30 text-on-surface font-extrabold px-6 py-4 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
                          <span className="material-symbols-outlined text-[#2563eb] text-[20px]">phone</span>
                          <span>Facility Consultation</span>
                      </a>
                    </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative w-full min-h-[380px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#071322] via-[#0d223a] to-[#15345a] p-8 flex flex-col justify-between text-white group hover-lift"
                >
                    <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
                    <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-sky-400/10 blur-3xl pointer-events-none"></div>

                    <div className="flex items-center justify-between relative z-10">
                        <div className="px-3.5 py-1.5 bg-blue-500/20 border border-blue-400/30 backdrop-blur-md rounded-lg text-blue-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping"></span>
                            PREMIUM CORPORATE HYGIENE
                        </div>
                        <img src="/images/logo.jpg" alt="Davita Kombat" className="h-10 w-auto object-contain rounded" />
                    </div>

                    <div className="my-auto py-6 relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#2563eb] to-[#38bdf8] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[44px] text-white">cleaning_services</span>
                        </div>
                        <h3 className="font-extrabold text-2xl lg:text-3xl text-white mb-2">
                            Davita Facility Management
                        </h3>
                        <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
                            Industrial hygiene, commercial high-rise janitorial maintenance, and sanitized work environments across Nigeria.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 relative z-10 text-center">
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2.5">
                            <p className="text-xl font-black text-[#38bdf8]">100%</p>
                            <p className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">Eco-Grade</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2.5">
                            <p className="text-xl font-black text-[#38bdf8]">24/7</p>
                            <p className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">Disinfection</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2.5">
                            <p className="text-xl font-black text-[#38bdf8]">NSCDC</p>
                            <p className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">Vetted Staff</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>

        {/* Feature Grid */}
        <section className="w-full py-20 px-6 lg:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#2563eb] font-bold tracking-widest uppercase text-xs">Specialized Solutions</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mt-2">Comprehensive Corporate Sanitization</h2>
                    <p className="text-on-surface-variant font-medium mt-4">
                      Maintaining spotless, healthy, and prestigious environments that elevate productivity and impress stakeholders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((item, idx) => (
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

      </main>
      <Footer />
    </>
  )
}
