import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/services/risk-analysis')({
  component: RiskAnalysisPage,
})

function RiskAnalysisPage() {
  const steps = [
    {
      num: "01",
      title: "THREAT & VULNERABILITY AUDITING",
      desc: "Comprehensive physical and technological security surveys of commercial facilities, diplomatic compounds, factories, and remote industrial assets to identify systemic vulnerabilities before they can be exploited.",
    },
    {
      num: "02",
      title: "RISK MITIGATION ARCHITECTURE",
      desc: "Formulating customized defense layers, access parameters, automated surveillance protocols, and crisis response contingencies designed to reduce vulnerability exposure to near zero.",
    },
    {
      num: "03",
      title: "CRISIS & EMERGENCY RESPONSE PLANNING",
      desc: "Developing and battle-testing business continuity plans, emergency evacuation protocols, lockdown strategies, and coordination channels with Nigerian law enforcement and NSCDC authorities.",
    },
    {
      num: "04",
      title: "CONTINUOUS THREAT MONITORING",
      desc: "Live geospatial intelligence reports and regular situational threat briefings tailored to corporate executives operating across high-density economic corridors in Nigeria.",
    }
  ];

  const highlights = [
    "Enterprise physical & perimeter security audits",
    "Geopolitical & operational threat intelligence",
    "Crisis management & emergency evacuation protocols",
    "Kidnap & ransom risk mitigation frameworks",
    "Facility vulnerability & penetrative testing",
    "NSCDC & international ISO compliance alignment"
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
                        <span className="font-bold tracking-widest uppercase text-xs text-[#2563eb]">Strategic Intelligence</span>
                        <div className="w-8 h-[2px] bg-[#2563eb]"></div>
                    </div>
                    
                    <h1 className="font-headline-xl text-[36px] sm:text-[46px] lg:text-[58px] font-extrabold leading-tight text-on-surface mb-4">
                        Risk Analysis, Mitigation &amp; <span className="text-[#2563eb]">Management</span>
                    </h1>
                    
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-12 h-[3px] bg-[#2563eb]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    </div>
                    
                    <p className="text-lg text-on-surface-variant font-medium mb-10 max-w-lg leading-relaxed">
                        Data-driven security audits, threat anticipation, and risk mitigation strategies protecting multinational corporations, industrial assets, and executive personnel across Nigeria.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {highlights.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-white border border-outline-variant/30 rounded-full px-4 py-2 shadow-sm text-sm font-bold text-on-surface-variant">
                              <span className="material-symbols-outlined text-[18px] text-[#2563eb]">security</span>
                              {item}
                          </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="bg-[#2563eb] text-white font-extrabold px-8 py-4 rounded-lg hover:bg-blue-600 transition-all shadow-md hover:scale-105">
                          Request Risk Audit
                      </Link>
                      <a href="tel:08031696371" className="bg-white border border-outline-variant/30 text-on-surface font-extrabold px-6 py-4 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
                          <span className="material-symbols-outlined text-[#2563eb] text-[20px]">chat</span>
                          <span>Consult Advisory Team</span>
                      </a>
                    </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative w-full h-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group"
                >
                    <img src="/images/command_control.jpg" alt="Security Risk Analysis Command Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#0b1c30]/90 backdrop-blur-md rounded-lg text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping"></span>
                        C4ISR THREAT INTELLIGENCE
                    </div>
                    <div className="absolute bottom-6 left-6 text-white font-extrabold text-xl">
                        Davita Risk Mitigation Framework
                    </div>
                </motion.div>

            </div>
        </section>

        {/* Steps Grid */}
        <section className="w-full py-20 px-6 lg:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#2563eb] font-bold tracking-widest uppercase text-xs">Methodology</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mt-2">Structured Enterprise Risk Assessment</h2>
                    <p className="text-on-surface-variant font-medium mt-4">
                      We transition clients from reactive crisis scrambling into an impregnable proactive defense stance backed by intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((item, idx) => (
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
