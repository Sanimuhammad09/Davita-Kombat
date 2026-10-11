import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/about/our-management')({
  component: OurManagementPage,
})

function OurManagementPage() {
  const executives = [
    { name: "Mr. Oyetola Durojaiye", role: "EXECUTIVE DIRECTOR (OPERATIONS)", img: "/images/security_hero_1.jpg" },
    { name: "Mr. Olusegun Olatunde", role: "GM, MARKETING & E-SECURITY", img: "/images/security_hero_2.jpg" },
    { name: "Mr. Abayomi Oladunjoye", role: "DGM, HUMAN RESOURCES & ADMIN", img: "/images/security_hero_3.jpg" },
    { name: "Mrs. Olufunsho Sotola", role: "DGM FINANCE AND ACCOUNT", img: "/images/security_hero_1.jpg" },
    { name: "Mrs. Bola Adio", role: "DGM, PAYROLL AND TREASURY", img: "/images/security_hero_2.jpg" },
    { name: "Ms. Oluseyi Adelaja", role: "HEAD, PLANNING AND LOGISTICS", img: "/images/security_hero_3.jpg" },
    { name: "Mr. Bayo Okeowo", role: "HEAD, E-SECURITY", img: "/images/security_hero_1.jpg" },
    { name: "Mr. Kayode Aridegbe", role: "REGIONAL MANAGER (NORTH CENTRAL)", img: "/images/security_hero_2.jpg" },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner */}
        <section className="w-full relative h-[450px] lg:h-[500px] flex items-center bg-[#0a1a33]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/images/davita_guard_officers.jpg" alt="Davita Kombat Management" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33] via-[#0a1a33]/70 to-[#0a1a33]/30"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full mt-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-secondary"></div>
                    <span className="font-bold tracking-widest uppercase text-sm text-white">About Davita Kombat</span>
                </div>
                <h1 className="font-headline-xl text-[40px] lg:text-[64px] font-extrabold leading-tight text-white mb-6 max-w-4xl">
                    Our <br/><span className="text-secondary">Management</span>
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl font-medium mb-8">
                    Meet the leadership team responsible for strategy, standards, and daily operational discipline.
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

        {/* Section 2: Management Team */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
            <div className="max-w-7xl mx-auto">
                
                {/* Heading */}
                <div className="flex flex-col mb-16">
                    <div className="w-24 h-1 bg-secondary mb-4"></div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-on-surface mb-4">
                        Our Management
                    </h2>
                    <p className="text-on-surface-variant font-medium">
                        Meet the dedicated team members who drive our mission forward.
                    </p>
                </div>

                {/* CEO Profile - Centered */}
                <div className="flex justify-center mb-16">
                    <div className="w-full max-w-[340px] bg-gradient-to-b from-[#0a192f] to-[#0d2342] text-white rounded-2xl shadow-xl overflow-hidden border border-blue-900/40 p-6 flex flex-col items-center text-center hover-lift">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#2563eb] to-[#38bdf8] p-1 shadow-lg mb-4">
                            <div className="w-full h-full rounded-full bg-[#0a192f] flex items-center justify-center border-2 border-white/20">
                                <span className="text-2xl font-black text-white tracking-wider">SO</span>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            CHIEF EXECUTIVE
                        </div>
                        <h3 className="font-extrabold text-xl text-white mb-1">Mr. Samuel Olaniran</h3>
                        <p className="text-[#38bdf8] font-bold text-xs tracking-widest uppercase">
                            MANAGING DIRECTOR/CEO
                        </p>
                        <p className="text-gray-300 text-xs mt-3 leading-relaxed">
                            Over three decades of visionary leadership in industrial protection, national infrastructure security, and corporate governance in Nigeria.
                        </p>
                    </div>
                </div>

                {/* Other Executives Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {executives.map((exec, idx) => {
                        const initials = exec.name.replace(/^(Mr\.|Mrs\.|Ms\.)\s*/, '').split(' ').slice(0, 2).map(n => n[0]).join('');
                        return (
                            <div key={idx} className="w-full bg-white rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col p-6 hover-lift">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1e40af] to-[#3b82f6] p-0.5 mx-auto mb-4">
                                    <div className="w-full h-full rounded-full bg-[#f8fafc] flex items-center justify-center border border-gray-200">
                                        <span className="text-lg font-black text-[#1e40af]">{initials}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center text-center">
                                    <h3 className="font-bold text-on-surface text-sm mb-1">{exec.name}</h3>
                                    <p className="text-[#2563eb] font-bold text-[10px] tracking-widest uppercase leading-tight mt-1">
                                        {exec.role}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
