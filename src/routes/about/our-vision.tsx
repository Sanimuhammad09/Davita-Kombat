import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/about/our-vision')({
  component: OurVisionPage,
})

function OurVisionPage() {
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
                    Our <br/><span className="text-secondary">Vision</span>
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl font-medium mb-8">
                    A clear direction for trusted security service, national reach, and long-term operational excellence.
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

        {/* Section 2: Vision Statement */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <div className="flex flex-col order-2 lg:order-1">
                        <div className="w-24 h-1 bg-secondary mb-6"></div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-on-surface mb-8">
                            Our Vision
                        </h2>
                        
                        <p className="text-lg text-on-surface-variant font-medium leading-relaxed mb-10">
                            To become the premier outfit in Nigeria with Global Network achieved through commitment to excellence in the provision of qualitative security services.
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider px-4 py-2">
                                Premier In Nigeria
                            </span>
                            <span className="bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider px-4 py-2">
                                Global Network
                            </span>
                            <span className="bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider px-4 py-2">
                                Qualitative Services
                            </span>
                            <span className="bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider px-4 py-2">
                                Commitment To Excellence
                            </span>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative order-1 lg:order-2">
                        {/* Decorative yellow right border */}
                        <div className="absolute -right-3 top-4 bottom-4 w-1.5 bg-secondary rounded-full z-10"></div>
                        <div className="rounded-xl overflow-hidden shadow-xl border border-outline-variant/30 relative">
                            <img 
                                src="/images/security_hero_3.jpg" 
                                alt="Davita Kombat Planning Meeting" 
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
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
