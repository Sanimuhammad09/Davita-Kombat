import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/about/testimonials')({
  component: TestimonialsPage,
})

function TestimonialsPage() {
  const testimonials = [
    {
      quote: "As the National Security Officer of Food and Agriculture Organization of the United Nation, I appreciate this company for their resilience and commitment to good services in the security industry. I started hiring/monitoring the company when I was the UNDSS Field Security Associate for the North East Nigeria with office in Bauchi, I started out with Davita Kombat in our various offices and surely their performances were commendable. Their professionalism in the discharge of security duties; especially access control, patrol and proper beat manning has earned them a reputation as one of the leading security guarding company in the North-Eastern part of Nigeria. The North East being a security compromised area, in terms of existing threat of terrorism, armed conflict and others, Davita Kombat has boldly penetrated even the heart of Maiduguri and become a dependable ally in security business; securing properties and personnel. With space for improvement in advanced guards training and leadership, the company is excelling to greater heights.",
      name: "Benjamin Brandford Adams, MISN",
      role: "NATIONAL SECURITY OFFICER (NSO) — FOOD AND AGRICULTURE ORGANIZATION OF THE UNITED NATIONS, NIGERIA — MAIDUGURI SUB OFFICE"
    },
    {
      quote: "On behalf of the Management and staff of Skye Bank PLC, I commend the invaluable contributions of Davita Kombat Nig. Ltd to the protection of assets and safe guarding of lives and property in both private and public sectors over the past 14 years cannot go unnoticed. Indeed it is a milestone worth celebrating and we are proud to associate with you. We commend your efforts and pray your organization grows from strength to strength in the years ahead.",
      name: "",
      role: "CSO — SKYE BANK PLC"
    },
    {
      quote: "We are proud to be associated with Davita Kombat Nigeria Limited. Keep doing the big work.",
      name: "",
      role: "MD/CEO — MULTICHEM INDUSTRIES"
    },
    {
      quote: "On behalf of the Central Bank of Nigeria, Security Office Lagos particularly, I would like to congratulate Davita Kombat Nigeria Limited for its many achievements over the past 14 years. Davita Kombat Nigeria Ltd has brought a new dimension into private security business providing security coverage for the Bank in a number of locations where CBN has its branches. Your organization has played a significant role in securing our assets nationwide, safeguarding our staff, properties and even our image. We look forward to better working relationship with your company in future.",
      name: "Osa-Odigie O.O (Mrs)",
      role: "DEPUTY DIRECTOR, LAGOS SECURITY OFFICE — CENTRAL BANK OF NIGERIA"
    },
    {
      quote: "Congratulations ring out from Adesoye College, Offa for the hardworking, dedicated and trustworthy leadership provided by Davita Kombat Nigeria Limited. As the flagship Vanguard learning institution in Nigeria, Adesoye College, Offa values the safety and security provided by your organization. We see your prestigious organization as part of our family and look forward to many years of your strong presence and protective hands on our campus. We are number one, because you are number one!!",
      name: "Dr. Barney J. Wilson",
      role: "PRINCIPAL — ADESOYE COLLEGE, OFFA"
    },
    {
      quote: "The advent of Davita Kombat in private security landscape has changed for the better private security management in Nigeria. It is our hope that the company will continue to pioneer greater advances in this critical sector and contribute much more to the security of lives and properties in Nigeria. As we celebrate you, we pray that you continue to live your motto 'First for Security and safety on a continuous basis'.",
      name: "Bolaji Adisa",
      role: "BOC GASES NIGERIA PLC"
    },
    {
      quote: "From a very humble beginning 14 years ago Davita Kombat Nigeria Limited has evolved to a corporate brand — an icon in the security sub sector of the nation's economy. We are Rinsol Limited — we identify with your vision and mission while saluting your courage, devotion and commitment to quality, effective and efficient service deliveries which has made you the favorite industry leader.",
      name: "Gboyega Ogunosun",
      role: "MD/CEO — RINSOL LIMITED"
    },
    {
      quote: "Your much esteemed organization has consistently offered qualitative service all these years and has offered security solutions to your numerous clients throughout the country. We rejoice with you and wish you the best of God's blessings.",
      name: "",
      role: "AGAPE CHRISTIAN MINISTRY INC."
    },
    {
      quote: "The entire Management and staff of Linkage Assurance Plc wish to congratulate you on your 14th Anniversary celebration. Your level of competence, professionalism and dynamic ways of operations which has kept you above your competitors over the period of years is highly appreciated. We again say congratulations and urge you to maintain the high standard which you are known for.",
      name: "",
      role: "MANAGEMENT AND STAFF — LINKAGE ASSURANCE PLC"
    },
    {
      quote: "On behalf of the ICRC, I wish to state that your organisation had provided us with the required and expected services as agreed in our contract engagement. It has been a wonderful relationship built since 2010 until now and we have no cause to complain of any inimical behaviour of your personnel serving with us. We also look forward to a continued cooperation.",
      name: "Ibrahim Xaima Aliyu",
      role: "HEAD OF OFFICE — INTERNATIONAL COMMITTEE OF THE RED CROSS — NASSARAWA GRA, KANO"
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
                <img src="/images/security_hero_1.jpg" alt="Davita Kombat Guards" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33] via-[#0a1a33]/70 to-[#0a1a33]/30"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full mt-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-secondary"></div>
                    <span className="font-bold tracking-widest uppercase text-sm text-white">About Davita Kombat</span>
                </div>
                <h1 className="font-headline-xl text-[40px] lg:text-[64px] font-extrabold leading-tight text-white mb-6 max-w-4xl">
                    What Our <br/>Clients <span className="text-secondary">Say</span>
                </h1>
                
                <p className="text-lg text-white/90 max-w-2xl font-medium mb-8">
                    Client confidence remains one of the clearest measures of the quality and consistency of our work.
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

        {/* Section 2: Testimonials List */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
            <div className="max-w-7xl mx-auto max-w-5xl">
                
                {/* Heading */}
                <div className="flex flex-col mb-16">
                    <div className="w-24 h-1 bg-[#2563eb] mb-4"></div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-on-surface mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-on-surface-variant font-medium">
                        Trusted by leading organisations across Nigeria and beyond.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="flex flex-col gap-12 lg:gap-16">
                    {testimonials.map((test, index) => (
                        <div key={index} className="flex flex-col pl-6 border-l-[3px] border-[#2563eb]">
                            <p className="text-on-surface-variant font-medium italic leading-relaxed mb-6">
                                "{test.quote}"
                            </p>
                            <div className="flex flex-col">
                                {test.name && (
                                    <span className="font-bold text-on-surface mb-1">{test.name}</span>
                                )}
                                <span className="text-[#2563eb] font-bold text-xs tracking-widest uppercase">
                                    {test.role}
                                </span>
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
