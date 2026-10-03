import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/about/our-core-values')({
  component: OurCoreValuesPage,
})

function OurCoreValuesPage() {
  const coreValues = [
    {
      id: "01",
      title: "INTEGRITY",
      description: "We uphold the highest standards of honesty and transparency in every interaction — with our clients, our staff, and the public."
    },
    {
      id: "02",
      title: "CUSTOMER SATISFACTION",
      description: "Satisfying the client. Our clients are royalty. We go above and beyond to ensure their safety and peace of mind at all times."
    },
    {
      id: "03",
      title: "EMPLOYEES CAPACITY BUILDING",
      description: "Our people are our greatest asset. We invest continuously in training and development so our operatives deliver world-class service."
    },
    {
      id: "04",
      title: "PROFESSIONALISM",
      description: "From appearance to conduct, we maintain the highest professional standards across every level of our organisation."
    },
    {
      id: "05",
      title: "EXCELLENCE",
      description: "Mediocrity has no place here. We pursue excellence in every assignment, every shift, and every client relationship."
    },
    {
      id: "06",
      title: "LEADERSHIP",
      description: "We set the pace in Nigeria's private security sector — driving innovation, raising the bar, and inspiring those around us."
    },
    {
      id: "07",
      title: "LOYALTY",
      description: "Loyalty to our clients, our country, and our colleagues is the bedrock on which Davita Kombat was built and continues to grow."
    }
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
                    Our Core <br/><span className="text-secondary">Values</span>
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl font-medium mb-8">
                    The principles that shape our conduct, service culture, and commitment to every assignment.
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

        {/* Section 2: Core Values Grid */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col mb-16 max-w-3xl">
                    <div className="w-24 h-1 bg-secondary mb-4"></div>
                    <h2 className="text-4xl font-extrabold text-primary mb-6">Our Core Values</h2>
                    <p className="text-lg text-on-surface-variant font-medium">
                        Over the years there are certain core values that we have repeatedly put into practice.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreValues.map((value, index) => (
                        <div 
                            key={value.id} 
                            className="relative bg-[#2563eb] p-8 min-h-[280px] flex flex-col shadow-md overflow-hidden group"
                        >
                            {/* Giant faded number watermark in the background */}
                            <span className="absolute top-2 right-4 text-[100px] font-black text-black/10 leading-none select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                                {value.id}
                            </span>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Yellow number box */}
                                <div className="bg-secondary text-on-secondary font-black text-sm px-3 py-1 w-fit mb-6 shadow-sm">
                                    {value.id}
                                </div>
                                
                                <h3 className="text-white font-extrabold text-lg uppercase mb-4 tracking-wide leading-tight">
                                    {value.title}
                                </h3>
                                
                                <p className="text-white/90 text-sm font-medium leading-relaxed mt-auto">
                                    {value.description}
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
