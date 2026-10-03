import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/about/our-background')({
  component: OurBackgroundPage,
})

function OurBackgroundPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Hero Banner */}
        <section className="w-full relative h-[450px] lg:h-[500px] flex items-center bg-[#0a1a33]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/images/security_hero_1.jpg" alt="Davita Kombat Facility" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33] via-[#0a1a33]/60 to-transparent"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full mt-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-secondary"></div>
                    <span className="font-bold tracking-widest uppercase text-sm text-white">About Davita Kombat</span>
                </div>
                <h1 className="font-headline-xl text-[40px] lg:text-[56px] font-extrabold leading-tight text-white mb-8 max-w-4xl">
                    Who We Are , What We Stand For , <span className="text-secondary">Our Mission</span>
                </h1>
                
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

        {/* Section 2: Our Background Text */}
        <section className="w-full py-20 px-6 lg:px-12 bg-surface">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col mb-10">
                    <div className="w-24 h-1 bg-secondary mb-4"></div>
                    <h2 className="text-3xl font-extrabold text-primary">Our Background</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-on-surface-variant font-medium leading-relaxed space-y-6">
                    <p>
                        Davita Kombat Nigeria Limited is a well-known brand name in the private industrial security sector in Nigeria. Established to redefine protection standards, Davita Kombat has continued to offer quality and total security services to its numerous clients spread across the length and breadth of the country.
                    </p>
                    <p>
                        Since incorporation, our watchword has been "total efficient security services" and within a short time, the company has acquired the toga of leadership in the Nigerian security business.
                    </p>
                    <p>
                        Our very strong presence in both commercial and political nerve centres of the country is an eloquent testimony of our elaborate and efficient machinery geared towards the provision of distinguished security services to our clients at short notices, and we are forever growing.
                    </p>
                    <p>
                        Our Training programmes continually provide in-depth knowledge and skills to our operatives and staff, in turn contributing to the efficient services we are known for.
                    </p>
                </div>
            </div>
        </section>

        {/* Section 3: Our Vision (Split Layout) */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Text */}
                <div className="flex flex-col">
                    <div className="w-24 h-1 bg-secondary mb-4"></div>
                    <h2 className="text-4xl font-extrabold text-primary mb-8">Our Vision</h2>
                    <p className="text-lg text-on-surface-variant font-medium leading-relaxed mb-10">
                        To become the premier outfit in Nigeria with Global Network achieved through commitment to excellence in the provision of qualitative security services.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                        <span className="px-5 py-2.5 bg-[#2563eb] text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-sm">
                            Premier in Nigeria
                        </span>
                        <span className="px-5 py-2.5 bg-[#2563eb] text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-sm">
                            Global Network
                        </span>
                        <span className="px-5 py-2.5 bg-[#2563eb] text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-sm">
                            Qualitative Services
                        </span>
                        <span className="px-5 py-2.5 bg-[#2563eb] text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-sm">
                            Commitment to Excellence
                        </span>
                    </div>
                </div>
                
                {/* Right: Image */}
                <div className="relative">
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-secondary z-20 rounded-r-lg"></div>
                    <img src="/images/security_hero_2.jpg" alt="Our Vision Training" className="w-full h-[400px] object-cover rounded-lg shadow-xl relative z-10" />
                </div>
            </div>
        </section>

        {/* Section 4: Our Mission (Split Layout) */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Image */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#2563eb] z-20 rounded-l-lg"></div>
                    <img src="/images/security_hero_3.jpg" alt="Our Mission Operations" className="w-full h-[400px] object-cover rounded-lg shadow-xl relative z-10" />
                </div>

                {/* Right: Text */}
                <div className="flex flex-col order-1 lg:order-2 pl-0 lg:pl-8">
                    <div className="w-24 h-1 bg-[#2563eb] mb-4"></div>
                    <h2 className="text-4xl font-extrabold text-primary mb-8">Our Mission</h2>
                    <p className="text-lg text-on-surface-variant font-medium leading-relaxed mb-8">
                        To provide reliable and effective security services to our clients through excellent world class customer services and appropriate application of the required resources.
                    </p>
                    
                    <div className="border-l-4 border-secondary pl-6 py-2">
                        <p className="text-lg text-on-surface-variant italic font-medium">
                            "Total efficient security services — delivered with excellence, every time."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 5: Our Management */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface-container-lowest border-t border-surface-container-low">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="flex flex-col">
                        <div className="w-24 h-1 bg-secondary mb-4"></div>
                        <h2 className="text-4xl font-extrabold text-primary mb-4">Our Management</h2>
                        <p className="text-on-surface-variant font-medium">
                            Meet the dedicated team members who drive our mission forward.
                        </p>
                    </div>
                    <Link to="/about/our-management" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold text-sm hover:bg-black/80 transition-colors">
                        View management <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>

                {/* Grid of Team Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Member 1 */}
                    <div className="bg-white rounded-lg shadow-md border border-surface-container-low overflow-hidden group">
                        <div className="h-64 bg-surface-container overflow-hidden">
                            {/* Placeholder silhouette or generic image */}
                            <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center text-on-surface-variant/30">
                                <span className="material-symbols-outlined text-[100px]">person</span>
                            </div>
                        </div>
                        <div className="p-6 border-t-4 border-secondary group-hover:bg-surface-container-lowest transition-colors">
                            <h3 className="font-bold text-primary text-lg mb-1">Mr. Samuel Olaniran</h3>
                            <p className="text-[10px] font-bold text-[#2563eb] uppercase tracking-widest">Managing Director/CEO</p>
                        </div>
                    </div>

                    {/* Member 2 */}
                    <div className="bg-white rounded-lg shadow-md border border-surface-container-low overflow-hidden group">
                        <div className="h-64 bg-surface-container overflow-hidden">
                            <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center text-on-surface-variant/30">
                                <span className="material-symbols-outlined text-[100px]">person</span>
                            </div>
                        </div>
                        <div className="p-6 border-t-4 border-secondary group-hover:bg-surface-container-lowest transition-colors">
                            <h3 className="font-bold text-primary text-lg mb-1">Mr. Oyetola Durojaiye</h3>
                            <p className="text-[10px] font-bold text-[#2563eb] uppercase tracking-widest">Executive Director (Operations)</p>
                        </div>
                    </div>

                    {/* Member 3 */}
                    <div className="bg-white rounded-lg shadow-md border border-surface-container-low overflow-hidden group">
                        <div className="h-64 bg-surface-container overflow-hidden">
                            <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center text-on-surface-variant/30">
                                <span className="material-symbols-outlined text-[100px]">person</span>
                            </div>
                        </div>
                        <div className="p-6 border-t-4 border-secondary group-hover:bg-surface-container-lowest transition-colors">
                            <h3 className="font-bold text-primary text-lg mb-1">Mr. Olusegun Olatunde</h3>
                            <p className="text-[10px] font-bold text-[#2563eb] uppercase tracking-widest">GM, Marketing & E-Security</p>
                        </div>
                    </div>

                    {/* Member 4 */}
                    <div className="bg-white rounded-lg shadow-md border border-surface-container-low overflow-hidden group">
                        <div className="h-64 bg-surface-container overflow-hidden">
                            <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center text-on-surface-variant/30">
                                <span className="material-symbols-outlined text-[100px]">person</span>
                            </div>
                        </div>
                        <div className="p-6 border-t-4 border-secondary group-hover:bg-surface-container-lowest transition-colors">
                            <h3 className="font-bold text-primary text-lg mb-1">Mr. Abayomi Oladunjoye</h3>
                            <p className="text-[10px] font-bold text-[#2563eb] uppercase tracking-widest">DGM, Human Resources & Admin</p>
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
