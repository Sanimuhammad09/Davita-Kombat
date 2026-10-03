import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
        
        {/* Section 1: Let's Start a Conversation (Dark Section) */}
        <section className="w-full bg-primary text-on-primary py-24 px-6 lg:px-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-[url('/images/security_hero_1.jpg')] bg-cover bg-center"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                {/* Left Side: Contact Info */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-0.5 bg-secondary"></div>
                        <span className="font-bold tracking-widest uppercase text-sm text-secondary">Contact Us</span>
                    </div>
                    <h1 className="font-headline-xl text-[48px] lg:text-[64px] font-extrabold leading-tight mb-6">
                        Let's Start a <br/><span className="text-secondary">Conversation</span>
                    </h1>
                    <p className="text-lg text-surface-container-lowest/80 mb-10 max-w-md">
                        Whether you need personal protection, access control, or any of our security services - our team is here around the clock.
                    </p>

                    <div className="flex flex-col gap-4">
                        {/* Box 1 */}
                        <div className="flex items-center gap-4 bg-[#0a1a33] p-5 rounded-lg border border-white/5 hover:border-secondary/30 transition-colors">
                            <span className="material-symbols-outlined text-secondary text-2xl">call</span>
                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">Call Us</p>
                                <p className="font-bold text-lg">+234 1 342 6900</p>
                            </div>
                        </div>
                        {/* Box 2 */}
                        <div className="flex items-center gap-4 bg-[#0a1a33] p-5 rounded-lg border border-white/5 hover:border-secondary/30 transition-colors">
                            <span className="material-symbols-outlined text-secondary text-2xl">mail</span>
                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">Email Us</p>
                                <p className="font-bold text-lg">operations@davitakombat.com</p>
                            </div>
                        </div>
                        {/* Box 3 */}
                        <div className="flex items-center gap-4 bg-[#0a1a33] p-5 rounded-lg border border-white/5 hover:border-secondary/30 transition-colors">
                            <span className="material-symbols-outlined text-secondary text-2xl">schedule</span>
                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">Working Hours</p>
                                <p className="font-bold text-lg">Mon - Fri, 8 AM - 6 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Stats Grid */}
                <div className="grid grid-cols-2 gap-4 lg:pt-12">
                    <div className="bg-secondary text-on-secondary rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
                        <span className="material-symbols-outlined text-4xl mb-4">verified_user</span>
                        <h3 className="text-4xl font-extrabold mb-2">30+</h3>
                        <p className="font-bold text-sm">Years of Experience</p>
                    </div>
                    <div className="bg-[#0a1a33] border border-white/5 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                        <span className="material-symbols-outlined text-secondary text-4xl mb-4">apartment</span>
                        <h3 className="text-4xl font-extrabold mb-2">10</h3>
                        <p className="font-bold text-sm text-white/70">Offices Nationwide</p>
                    </div>
                    <div className="bg-[#0a1a33] border border-white/5 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                        <span className="material-symbols-outlined text-secondary text-4xl mb-4">support_agent</span>
                        <h3 className="text-4xl font-extrabold mb-2">24/7</h3>
                        <p className="font-bold text-sm text-white/70">Customer Support</p>
                    </div>
                    <div className="bg-[#0a1a33] border border-white/5 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                        <span className="material-symbols-outlined text-secondary text-4xl mb-4">location_on</span>
                        <h3 className="text-4xl font-extrabold mb-2">1,000+</h3>
                        <p className="font-bold text-sm text-white/70">Clients Protected</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 2: Form & Headquarters Card */}
        <section className="w-full bg-surface py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Left: Form */}
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-0.5 bg-secondary"></div>
                        <span className="font-bold tracking-widest uppercase text-sm text-on-surface-variant">Write To Us</span>
                    </div>
                    <h2 className="text-4xl font-extrabold text-primary mb-8">Send Us a Message</h2>
                    
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-on-surface-variant/50 text-xl">person</span>
                                </div>
                                <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 border border-surface-container-high rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface bg-surface-container-lowest" />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-on-surface-variant/50 text-xl">mail</span>
                                </div>
                                <input type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-4 border border-surface-container-high rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface bg-surface-container-lowest" />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-on-surface-variant/50 text-xl">subject</span>
                            </div>
                            <input type="text" placeholder="Subject" className="w-full pl-12 pr-4 py-4 border border-surface-container-high rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface bg-surface-container-lowest" />
                        </div>
                        <div className="relative">
                            <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                                <span className="material-symbols-outlined text-on-surface-variant/50 text-xl">chat</span>
                            </div>
                            <textarea placeholder="Tell us how we can help..." rows={5} className="w-full pl-12 pr-4 py-4 border border-surface-container-high rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface bg-surface-container-lowest resize-none"></textarea>
                        </div>
                        <button type="submit" className="flex items-center gap-2 bg-secondary text-on-secondary font-bold px-8 py-4 rounded hover:bg-secondary/90 transition-colors shadow-sm">
                            <span className="material-symbols-outlined">send</span> Send Message
                        </button>
                    </form>
                </div>

                {/* Right: HQ Card */}
                <div className="flex justify-end">
                    <div className="bg-primary text-on-primary rounded-2xl w-full max-w-md flex flex-col shadow-2xl relative overflow-hidden">
                        {/* Content */}
                        <div className="p-10 flex-1 z-10">
                            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase mb-6">
                                Headquarters
                            </div>
                            <h3 className="text-2xl font-bold mb-10">Head Office - Lagos</h3>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start gap-5">
                                    <div className="w-10 h-10 rounded-full bg-[#0a1a33] flex items-center justify-center shrink-0 border border-white/5">
                                        <span className="material-symbols-outlined text-secondary text-lg">call</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Phone</p>
                                        <p className="font-medium mb-1">+234 1 342 6900</p>
                                        <p className="font-medium mb-1">+234 1 342 6902</p>
                                        <p className="font-medium">+234 812 945 1102-4</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="w-10 h-10 rounded-full bg-[#0a1a33] flex items-center justify-center shrink-0 border border-white/5">
                                        <span className="material-symbols-outlined text-secondary text-lg">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Email</p>
                                        <p className="font-medium">operations@davitakombat.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="w-10 h-10 rounded-full bg-[#0a1a33] flex items-center justify-center shrink-0 border border-white/5">
                                        <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Address</p>
                                        <p className="font-medium text-white/90 leading-relaxed">
                                            Davita Kombat House<br/>
                                            Km 10, Lekki-Epe Expressway<br/>
                                            Near Chevron Roundabout Lekki<br/>
                                            Lagos, Nigeria.<br/>
                                            P.O.Box 60341 Federal Secretariat, Ikoyi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Bottom Button */}
                        <div className="p-6 bg-[#0a1a33]/50 border-t border-white/10 z-10">
                            <button className="w-full flex justify-center items-center gap-2 bg-secondary text-on-secondary font-bold py-4 rounded-xl hover:bg-secondary/90 transition-colors">
                                <span className="material-symbols-outlined">call</span> Call Head Office
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 3: Map and Locations */}
        <section className="w-full bg-surface-container-lowest py-24 px-6 lg:px-12 border-t border-surface-container-low">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex items-center gap-4 mb-4 justify-center">
                    <div className="w-8 h-0.5 bg-secondary"></div>
                    <span className="font-bold tracking-widest uppercase text-sm text-on-surface-variant">Our Locations</span>
                    <div className="w-8 h-0.5 bg-secondary"></div>
                </div>
                <h2 className="text-4xl font-extrabold text-primary mb-10 text-center">Find an Office Near You</h2>
                
                {/* Pill Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-bold text-sm shadow-md">Lagos HQ</button>
                    <button className="px-6 py-2.5 rounded-full bg-surface text-on-surface-variant font-bold text-sm hover:bg-surface-container border border-surface-container-high transition-colors">Abuja</button>
                    <button className="px-6 py-2.5 rounded-full bg-surface text-on-surface-variant font-bold text-sm hover:bg-surface-container border border-surface-container-high transition-colors">Port Harcourt</button>
                    <button className="px-6 py-2.5 rounded-full bg-surface text-on-surface-variant font-bold text-sm hover:bg-surface-container border border-surface-container-high transition-colors">Kano</button>
                    <button className="px-6 py-2.5 rounded-full bg-surface text-on-surface-variant font-bold text-sm hover:bg-surface-container border border-surface-container-high transition-colors">Ibadan</button>
                    <button className="px-6 py-2.5 rounded-full bg-surface text-on-surface-variant font-bold text-sm hover:bg-surface-container border border-surface-container-high transition-colors">Kaduna</button>
                    <button className="px-6 py-2.5 rounded-full bg-surface text-on-surface-variant font-bold text-sm hover:bg-surface-container border border-surface-container-high transition-colors">Lagos Mainland</button>
                    <button className="px-6 py-2.5 rounded-full bg-surface text-on-surface-variant font-bold text-sm hover:bg-surface-container border border-surface-container-high transition-colors">Benin City</button>
                    <button className="px-6 py-2.5 rounded-full bg-surface text-on-surface-variant font-bold text-sm hover:bg-surface-container border border-surface-container-high transition-colors">Bauchi</button>
                    <button className="px-6 py-2.5 rounded-full bg-surface text-on-surface-variant font-bold text-sm hover:bg-surface-container border border-surface-container-high transition-colors">Maiduguri</button>
                </div>

                {/* Map Card */}
                <div className="w-full bg-surface rounded-2xl shadow-xl overflow-hidden border border-surface-container-low">
                    {/* Card Header */}
                    <div className="bg-primary text-on-primary p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Head Office (Lagos)</h3>
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Headquarters</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 bg-secondary text-on-secondary font-bold px-6 py-3 rounded hover:bg-secondary/90 transition-colors">
                                <span className="material-symbols-outlined text-sm">call</span> Call Office
                            </button>
                            <button className="flex items-center gap-2 text-white hover:text-secondary transition-colors font-bold px-4 py-3">
                                <span className="material-symbols-outlined text-sm">open_in_new</span> Open Maps
                            </button>
                        </div>
                    </div>
                    {/* Card Body Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8 border-b border-surface-container-low">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
                                <span className="material-symbols-outlined text-lg">call</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">Phone</p>
                                <p className="font-medium text-on-surface mb-1">+234 1 342 6900</p>
                                <p className="font-medium text-on-surface mb-1">+234 1 342 6902</p>
                                <p className="font-medium text-on-surface">+234 812 945 1102-4</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
                                <span className="material-symbols-outlined text-lg">mail</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">Email</p>
                                <p className="font-medium text-on-surface">operations@davitakombat.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
                                <span className="material-symbols-outlined text-lg">location_on</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">Address</p>
                                <p className="font-medium text-on-surface leading-relaxed">
                                    Davita Kombat House<br/>
                                    Km 10, Lekki-Epe Expressway<br/>
                                    Near Chevron Roundabout Lekki<br/>
                                    Lagos, Nigeria.<br/>
                                    P.O.Box 60341 Federal Secretariat, Ikoyi.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Iframe Map Placeholder */}
                    <div className="w-full h-[400px] bg-surface-container-low relative flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Lekki,Lagos&zoom=13&size=1200x400&maptype=roadmap')] bg-cover bg-center"></div>
                        <div className="z-10 flex flex-col items-center text-on-surface-variant">
                            <span className="material-symbols-outlined text-4xl mb-2 text-primary">map</span>
                            <p className="font-medium">Interactive Map Integration Here</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 4: Bottom CTA Banner */}
        <section className="w-full bg-primary text-on-primary py-16 px-6 lg:px-12 border-b-8 border-secondary">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Your Security Is <span className="text-secondary">Our Priority</span></h2>
                    <p className="text-surface-container-lowest/80 text-lg leading-relaxed">
                        With over 30 years of experience and offices across Nigeria, Davita Kombat is never far away. Let us protect what matters most to you.
                    </p>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                    <button className="flex items-center gap-2 bg-secondary text-on-secondary font-bold px-8 py-4 rounded hover:bg-secondary/90 transition-colors shadow-sm text-sm uppercase tracking-widest">
                        <span className="material-symbols-outlined">call</span> Call Now
                    </button>
                    <button className="flex items-center gap-2 text-white hover:text-secondary transition-colors font-bold text-sm uppercase tracking-widest">
                        <span className="material-symbols-outlined text-lg">mail</span> Email Us &rarr;
                    </button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
