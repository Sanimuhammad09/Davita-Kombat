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
                <img src="/images/security_hero_2.jpg" alt="Davita Kombat Guards" className="w-full h-full object-cover opacity-40" />
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
                    <div className="w-full max-w-[320px] bg-white rounded-md border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col">
                        <div className="relative w-full aspect-[3/4] bg-surface-container-low p-3">
                            <img 
                                src="/images/security_hero_3.jpg" 
                                alt="Mr. Samuel Olaniran" 
                                className="w-full h-full object-cover"
                            />
                            {/* Bottom shadow overlay for image */}
                            <div className="absolute bottom-3 left-3 right-3 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 text-center">
                            <h3 className="font-extrabold text-on-surface text-lg mb-1">Mr. Samuel Olaniran</h3>
                            <p className="text-[#2563eb] font-bold text-[10px] tracking-widest uppercase">
                                MANAGING DIRECTOR/CEO
                            </p>
                        </div>
                    </div>
                </div>

                {/* Other Executives Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {executives.map((exec, idx) => (
                        <div key={idx} className="w-full bg-white rounded-md border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col">
                            <div className="relative w-full aspect-[3/4] bg-surface-container-low p-3">
                                <img 
                                    src={exec.img} 
                                    alt={exec.name} 
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom shadow overlay for image */}
                                <div className="absolute bottom-3 left-3 right-3 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="flex flex-col items-start p-5">
                                <h3 className="font-extrabold text-on-surface text-sm mb-1">{exec.name}</h3>
                                <p className="text-[#2563eb] font-bold text-[10px] tracking-widest uppercase leading-tight">
                                    {exec.role}
                                </p>
                            </div>
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
