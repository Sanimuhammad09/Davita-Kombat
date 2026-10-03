import { createFileRoute, Link } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useState } from 'react'

export const Route = createFileRoute('/explore/guards-recruitment')({
  component: GuardsRecruitmentPage,
})

function GuardsRecruitmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const requirements = [
    { title: "Application letter", desc: "Applicants should provide an application letter." },
    { title: "Passport photograph", desc: "Applicants should provide four passport photographs when contacted by the recruitment team." },
    { title: "Two guarantors", desc: "Applicants should provide two guarantors." },
    { title: "O'Level certificate", desc: "Applicants should provide a copy of the original O'Level certificate." },
    { title: "Birth certificate", desc: "Applicants should provide a copy of their birth certificate." }
  ];

  const faqs = [
    {
      q: "Can both male and female applicants apply?",
      a: "Yes. The recruitment is open to able-bodied male and female applicants who meet the listed requirements."
    },
    {
      q: "Is previous security experience compulsory?",
      a: "Previous security, military, or paramilitary experience is helpful, but interested applicants can still contact the recruitment team for guidance."
    },
    {
      q: "How do I submit my documents?",
      a: "Please contact the recruitment team through the contact page. They will guide shortlisted applicants on the required documents and next steps."
    }
  ];

  const processSteps = [
    { num: 1, title: "Review requirements", desc: "Confirm that your age, height, qualifications, and documents meet the guard recruitment requirements." },
    { num: 2, title: "Contact our team", desc: "Visit the contact page and send your recruitment enquiry with your phone number and preferred work location." },
    { num: 3, title: "Prepare documents", desc: "Keep your application letter, passport photographs, guarantor details, certificates, and birth certificate ready for review." },
    { num: 4, title: "Wait for follow-up", desc: "Our recruitment team will respond with the next steps and guide shortlisted applicants on document submission." }
  ];

  const responsibilities = [
    { title: "Access control", desc: "Control entry points, verify visitors, and enforce post orders professionally." },
    { title: "Patrol and observation", desc: "Conduct patrols, monitor premises, and identify unusual activity early." },
    { title: "Incident reporting", desc: "Prepare clear reports and escalate incidents through the correct channels." },
    { title: "Emergency response", desc: "Respond calmly to emergencies and support safety procedures at assigned locations." }
  ];

  const whyJoin = [
    { title: "Structured training", desc: "Receive onboarding and post-specific training before deployment." },
    { title: "Continuous employment opportunities", desc: "Qualified guards can be considered for ongoing deployment across client locations." },
    { title: "Professional supervision", desc: "Work within a clear operational structure with field support." }
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-[80px] lg:pt-[100px] bg-[#f5efe6] min-h-screen font-sans text-on-surface">
        
        {/* Section 1: Hero (Standard) */}
        <section className="w-full relative py-24 bg-black">
            <div className="absolute inset-0 z-0 opacity-40">
                <img src="/images/security_hero_1.jpg" alt="Guard Recruitment" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <h3 className="font-extrabold tracking-widest uppercase text-sm text-[#2563eb] mb-4">
                    CAREERS AT DAVITA KOMBAT
                </h3>
                <h1 className="text-[48px] lg:text-[64px] font-black text-white leading-tight mb-6">
                    Guard Recruitment
                </h1>
                <p className="text-lg text-white/90 font-medium max-w-xl">
                    Join our team of dedicated security professionals. Review the requirements and recruitment process below to start your journey with Davita Kombat.
                </p>
            </div>
        </section>

        {/* Section 2: Responsibilities & Why Join */}
        <section className="w-full py-20 px-6 lg:px-12 bg-[#f5efe6]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Guard Responsibilities */}
                <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12 border border-outline-variant/20">
                    <h2 className="text-3xl font-black mb-8">Guard responsibilities</h2>
                    <div className="flex flex-col gap-6">
                        {responsibilities.map((resp, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="mt-1 shrink-0 text-[#2563eb]">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-on-surface-variant font-medium leading-relaxed">
                                    <span className="font-extrabold text-on-surface">{resp.title}:</span> {resp.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Join */}
                <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12 border border-outline-variant/20">
                    <h2 className="text-3xl font-black mb-8">Why join Davita Kombat</h2>
                    <div className="flex flex-col gap-4">
                        {whyJoin.map((item, idx) => (
                            <div key={idx} className="bg-[#f5efe6] rounded-lg p-6 border border-[#e8dfcf]">
                                <h4 className="font-extrabold text-lg mb-2">{item.title}</h4>
                                <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>

        {/* Section 3: Recruitment enquiry process */}
        <section className="w-full py-20 px-6 lg:px-12 bg-[#f5efe6]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h3 className="font-extrabold tracking-widest uppercase text-xs text-[#2563eb] mb-4">
                    HOW IT WORKS
                </h3>
                <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
                    Recruitment enquiry process
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {processSteps.map((step) => (
                        <div key={step.num} className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/20 flex flex-col hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#2563eb] rounded flex items-center justify-center text-xl font-black mb-6 shadow-sm">
                                {step.num}
                            </div>
                            <h4 className="font-extrabold text-xl mb-4">{step.title}</h4>
                            <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Section 4: Other requirements */}
        <section className="w-full py-20 px-6 lg:px-12 bg-white border-y border-outline-variant/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">
                
                <div className="flex flex-col">
                    <h3 className="font-extrabold tracking-widest uppercase text-xs text-[#2563eb] mb-4">
                        REQUIREMENT AREA
                    </h3>
                    <h2 className="text-4xl lg:text-[40px] font-black leading-tight mb-4">
                        Other <br/>requirements
                    </h2>
                    <p className="text-on-surface-variant font-medium">
                        Review these details before contacting recruitment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {requirements.map((req, idx) => (
                        <div key={idx} className="bg-[#f5efe6] rounded-xl p-6 border border-[#e8dfcf]">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="mt-1 text-[#2563eb]">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-extrabold text-lg leading-tight">{req.title}</h4>
                            </div>
                            <p className="text-on-surface-variant text-sm font-medium leading-relaxed pl-8">
                                {req.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>

        {/* Section 5: Guard recruitment FAQ */}
        <section className="w-full py-24 px-6 lg:px-12 bg-[#f5efe6]">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h3 className="font-extrabold tracking-widest uppercase text-xs text-[#2563eb] mb-4">
                    QUESTIONS
                </h3>
                <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
                    Guard recruitment FAQ
                </h2>

                <div className="w-full flex flex-col gap-4">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white rounded-lg border border-outline-variant/20 overflow-hidden shadow-sm transition-all"
                        >
                            <button 
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="w-full px-6 py-5 flex items-center gap-3 text-left focus:outline-none hover:bg-gray-50"
                            >
                                <svg 
                                    className={`w-4 h-4 text-on-surface transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
                                    fill="currentColor" viewBox="0 0 20 20"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <h4 className="font-extrabold text-lg flex-1">{faq.q}</h4>
                            </button>
                            
                            <div 
                                className={`px-6 text-on-surface-variant font-medium leading-relaxed transition-all duration-300 overflow-hidden ${
                                    openFaq === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="pl-7">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Section 6: CTA Banner */}
        <section className="w-full pb-24 px-6 lg:px-12 bg-[#f5efe6]">
            <div className="max-w-6xl mx-auto relative rounded-2xl overflow-hidden bg-black shadow-xl">
                <div className="absolute inset-0 z-0 opacity-30">
                    <img src="/images/security_hero_2.jpg" alt="Join Davita Kombat" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                </div>
                
                <div className="relative z-10 px-6 py-20 flex flex-col items-center text-center">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                        Ready to join Davita Kombat?
                    </h2>
                    <p className="text-white/80 font-medium text-lg max-w-2xl mb-10">
                        Contact our recruitment team through the contact page and we will guide qualified applicants on the next steps.
                    </p>
                    <Link to="/contact" className="bg-[#2563eb] text-black font-extrabold px-8 py-4 rounded hover:bg-[#2563eb]/90 transition-colors flex items-center gap-2">
                        Contact Recruitment Team
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
