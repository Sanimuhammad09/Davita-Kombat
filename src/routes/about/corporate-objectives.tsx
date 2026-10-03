import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/about/corporate-objectives')({
  component: CorporateObjectivesPage,
})

function CorporateObjectivesPage() {
  const objectives = [
    { id: "01", text: "Achieve Revenue of 35% increase on 2024 performance." },
    { id: "02", text: "Achieve PBT of 6% in year 2025." },
    { id: "03", text: "Improvement on the liquidity position at the end of Q4 by ensuring 100% collection of monthly invoice value." },
    { id: "04", text: "Achieve Clients' and Guards' retention of 92% and 90% respectively on or before the end of Q4." },
    { id: "05", text: "Achieve net Clients' acquisition and Guards' acquisition rate of 10% and 10% respectively on or before the end of Q4." },
    { id: "06", text: "Ensure 100% of the Clients' and Guards' complaints are resolved within 72 hours and escalation initiated if resolution is not achieved within the set timeline." },
    { id: "07", text: "Achieve at least 85% Customer satisfaction index bi-annually." },
    { id: "08", text: "Ensure at least 80% of the workforce undergo training and development in identified competence areas to increase productivity and overall performance." },
    { id: "09", text: "Ensure 100% compliance with all statutory, regulatory, and industry standard requirements." },
    { id: "10", text: "Achieve Fire drill quarterly." },
    { id: "11", text: "Achieve Internal Financial Audits quarterly." },
    { id: "12", text: "Improve on our Quality Management System (ISO 9001:2015) through Internal and Surveillance Audits annually." },
    { id: "13", text: "Achieve Certification of Occupational Health and Safety Management System (ISO 45001:2018)." },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner */}
        <section className="w-full relative h-[450px] lg:h-[500px] flex items-center bg-[#0a1a33]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/images/security_hero_1.jpg" alt="Davita Kombat Guards" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33] via-[#0a1a33]/70 to-[#0a1a33]/30"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full mt-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-secondary"></div>
                    <span className="font-bold tracking-widest uppercase text-sm text-white">About Davita Kombat</span>
                </div>
                <h1 className="font-headline-xl text-[40px] lg:text-[64px] font-extrabold leading-tight text-white mb-6 max-w-4xl">
                    Corporate Objectives & <br/><span className="text-secondary">Quality Policy</span>
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl font-medium mb-8">
                    The operating standards, quality commitments, and measurable objectives that guide our security service delivery.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <span className="px-4 py-2 border border-white/30 text-white text-xs font-bold uppercase tracking-widest bg-white/5">
                        Since 2010
                    </span>
                    <span className="px-4 py-2 border border-white/30 text-white text-xs font-bold uppercase tracking-widest bg-white/5">
                        ISO-Aligned Standards
                    </span>
                    <span className="px-4 py-2 border border-white/30 text-white text-xs font-bold uppercase tracking-widest bg-white/5">
                        Nationwide Coverage
                    </span>
                </div>
            </div>
            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent z-10"></div>
        </section>

        {/* Section 2: Objectives & Policy */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
            <div className="max-w-7xl mx-auto">
                
                <div className="w-full border-t-[3px] border-[#2563eb] pt-6 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-on-surface">
                        Corporate Objectives & Quality Policy
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Left: Corporate Objectives */}
                    <div className="flex flex-col">
                        <h3 className="text-[#2563eb] font-bold text-lg tracking-widest uppercase mb-8">
                            Corporate Objectives
                        </h3>
                        
                        <div className="flex flex-col gap-6">
                            {objectives.map((obj) => (
                                <div key={obj.id} className="flex items-start gap-5 group">
                                    <div className="bg-secondary text-on-secondary font-black text-sm px-2.5 py-1 min-w-[32px] text-center shadow-sm shrink-0">
                                        {obj.id}
                                    </div>
                                    <p className="text-on-surface-variant font-medium leading-relaxed pt-0.5">
                                        {obj.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Quality Policy */}
                    <div className="flex flex-col">
                        <h3 className="text-[#2563eb] font-bold text-lg tracking-widest uppercase mb-8">
                            Quality Policy
                        </h3>
                        
                        <div className="flex flex-col gap-6 text-on-surface-variant font-medium leading-relaxed">
                            <p>
                                DAVITA KOMBAT in line with our strategic direction to be the premier security 
                                outfit in Nigeria with Global Network and Partnerships is committed to the 
                                provision and deployment of trained security operatives, supply chain of 
                                security equipment, K-9 services and security consultancy to meet the need 
                                and expectations of our valued stakeholders, ensuring their utmost 
                                satisfaction.
                            </p>
                            
                            <p>
                                We continually improve our processes in compliance with applicable 
                                Statutory & Regulatory and other requirements.
                            </p>
                        </div>

                        <div className="w-full border-t border-outline-variant/30 my-8"></div>
                        
                        <div className="flex flex-col">
                            <span className="font-extrabold text-on-surface text-xl mb-1">Sam Olaniran</span>
                            <span className="text-[#2563eb] font-bold text-xs tracking-widest uppercase mb-8">
                                Managing Director / CEO
                            </span>
                            
                            <div className="flex gap-3">
                                <span className="bg-[#2563eb] text-white text-xs font-bold px-3 py-1.5 shadow-sm">
                                    ISO 9001:2015
                                </span>
                                <span className="bg-[#2563eb] text-white text-xs font-bold px-3 py-1.5 shadow-sm">
                                    ISO 45001:2018
                                </span>
                            </div>
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
