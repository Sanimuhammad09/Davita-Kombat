import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/about/affiliations')({
  component: AffiliationsPage,
})

function AffiliationsPage() {
  const awards = [
    { year: "2015", title: "Distinguished Award", body: "Association of Licensed Private Security Practitioners of Nigeria (ALPSPN)" },
    { year: "2013", title: "Best Private Security Company in Nigeria", body: "2nd National Conference on Disaster & Security Management" },
    { year: "2012", title: "Security Company of the Year", body: "National Outstanding Leadership Awards" },
    { year: "2011", title: "African Order of Merit Award", body: "Institute of Government Research & Leadership Technology — in provision of World Class Security Services" },
    { year: "2011", title: "Security Company of the Year", body: "Global Leadership Awards for Excellence" },
    { year: "2010", title: "Most Innovative Security Company of the Year", body: "Global Leadership Awards for Excellence" },
    { year: "2010", title: "Security Guarding Company of the Year", body: "Conference on Disaster, Safety and Security Management Award" },
    { year: "2010", title: "African Achievement & Performance Merit Award", body: "Institute of Government Research & Leadership Technology" },
    { year: "2008", title: "Best Safety Conscious Company of the Year", body: "Gateway Business Award" },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner */}
        <section className="w-full relative h-[450px] lg:h-[500px] flex items-center bg-[#0a1a33]">
            <div className="absolute inset-0 z-0">
                <img src="/images/security_hero_2.jpg" alt="Davita Kombat Guards" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33] via-[#0a1a33]/70 to-[#0a1a33]/30"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full mt-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-secondary"></div>
                    <span className="font-bold tracking-widest uppercase text-sm text-white">About Davita Kombat</span>
                </div>
                <h1 className="font-headline-xl text-[40px] lg:text-[64px] font-extrabold leading-tight text-white mb-6 max-w-4xl">
                    Affiliations & <br/><span className="text-secondary">Awards</span>
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl font-medium mb-8">
                    Professional memberships and recognitions that reflect our industry standing and operating standards.
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
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent z-10"></div>
        </section>

        {/* Section 2: Affiliations */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    <div className="flex flex-col">
                        <div className="w-full border-t-[3px] border-[#2563eb] pt-4 mb-6">
                            <h2 className="text-2xl font-extrabold text-on-surface">Professional Affiliations</h2>
                        </div>

                        <ul className="flex flex-col gap-6 mb-12">
                            <li className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                                    <h3 className="font-extrabold text-on-surface">ASIS International</h3>
                                </div>
                                <p className="text-sm text-on-surface-variant font-medium leading-relaxed pl-5">
                                    With more than 33,000 members, ASIS International is the pre-eminent international 
                                    organization for professionals responsible for security, including managers and directors 
                                    of security. In addition, corporate executives and other management personnel, as well 
                                    as consultants, architects, attorneys, and federal, state, and local law enforcement, are 
                                    becoming involved with ASIS to better understand the constant changes in security 
                                    issues and solutions.
                                </p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                                <h3 className="font-extrabold text-on-surface">Association of Licensed Private Security Practitioners of Nigeria (ALPSPN)</h3>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                                <h3 className="font-extrabold text-on-surface">The Nigerian-South African Chamber of Commerce</h3>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                                <h3 className="font-extrabold text-on-surface">Nigerian Institute of Industrial Security (NIIS)</h3>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                                <h3 className="font-extrabold text-on-surface">Nigerian Security & Civil Defence Corps (NSCDC)</h3>
                            </li>
                        </ul>

                        <div className="w-full border-t-[3px] border-secondary pt-4 mb-6">
                            <h2 className="text-2xl font-extrabold text-on-surface">Domestic Affiliations</h2>
                        </div>

                        <ul className="flex flex-col gap-6">
                            <li className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                                    <h3 className="font-extrabold text-on-surface">The Nigerian Police Force</h3>
                                </div>
                                <p className="text-sm text-on-surface-variant font-medium leading-relaxed pl-5">
                                    Davita Kombat carry out its day to day activities with armed police escorts. Remember, the 
                                    police is your friend.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="relative h-full flex flex-col justify-center lg:justify-start pt-4 lg:pl-10">
                        <div className="absolute left-0 top-12 bottom-12 w-[3px] bg-[#2563eb] hidden lg:block"></div>
                        <img 
                            src="/images/security_hero_3.jpg" 
                            alt="Facility Corridor" 
                            className="w-full h-auto max-h-[400px] object-cover shadow-lg border border-outline-variant/30"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Section 3: Awards */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto">
                
                <div className="flex flex-col mb-16">
                    <div className="w-24 h-1 bg-[#2563eb] mb-4"></div>
                    <h2 className="text-4xl font-extrabold text-on-surface mb-6">Awards</h2>
                    <p className="text-lg text-on-surface-variant font-medium max-w-2xl leading-relaxed">
                        Davita Kombat Nigeria Limited is a multi-award winning company that has been recognised by various local and international institutions and bodies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {awards.map((award, index) => (
                        <div key={index} className="flex flex-col pt-5 border-t-[3px] border-[#2563eb]">
                            <div className="bg-secondary text-on-secondary font-black text-xs px-2 py-1 w-fit mb-4">
                                {award.year}
                            </div>
                            <h3 className="font-extrabold text-on-surface text-lg mb-3">
                                {award.title}
                            </h3>
                            <p className="text-on-surface-variant text-sm font-medium leading-relaxed">
                                {award.body}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
