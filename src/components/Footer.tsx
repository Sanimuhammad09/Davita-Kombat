import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer className="w-full bg-[#081220] text-white py-16 px-6 lg:px-12 relative overflow-hidden border-t border-secondary/20">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <img src="/images/logo.jpg" alt="Davita Kombat Watermark" className="w-[600px] h-auto grayscale" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <img src="/images/logo.jpg" alt="Davita Kombat Security" className="w-16 h-16 rounded shadow-lg" />
              <div className="flex flex-col">
                <span className="font-headline-sm text-2xl uppercase tracking-tight text-secondary leading-none font-extrabold">
                  Davita Kombat
                </span>
                <span className="text-xs text-white/70 uppercase tracking-widest font-medium">
                  Nigeria Limited
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col">
            <h4 className="text-secondary font-bold text-lg mb-6">Contact</h4>
            <div className="flex flex-col gap-5 text-sm text-white/80">
              <a href="tel:02013426900" className="flex items-start gap-3 hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[18px] mt-0.5">call</span>
                <span className="font-medium">02-013426900</span>
              </a>
              <a href="mailto:operations@davitakombat.com" className="flex items-start gap-3 hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[18px] mt-0.5">mail</span>
                <span className="font-medium">operations@davitakombat.com</span>
              </a>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[18px] mt-0.5">location_on</span>
                <span className="leading-relaxed font-medium">
                  Km 10, Lekki-Epe Expressway Near Chevron Roundabout Lekki Lagos, Nigeria.
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-secondary font-bold text-lg mb-6">Quick Links</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/80 font-medium">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              <Link to="/about/our-background" className="hover:text-secondary transition-colors">About</Link>
              <Link to="/explore/careers" className="hover:text-secondary transition-colors">Careers</Link>
              <Link to="/services/personal-protection" className="hover:text-secondary transition-colors">Services</Link>
              <Link to="/explore/guards-recruitment" className="hover:text-secondary transition-colors">Guards Recruitment</Link>
              <Link to="/about/testimonials" className="hover:text-secondary transition-colors">Testimonials</Link>
              <Link to="/explore/blog" className="hover:text-secondary transition-colors">Articles</Link>
              <a href="#" className="hover:text-secondary transition-colors">FAQs</a>

            </div>
          </div>

          {/* Column 4: Certifications */}
          <div className="flex flex-col lg:items-end">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="flex flex-col items-center justify-center bg-[#c8102e] text-white p-2 rounded w-16 h-16 text-center">
                <span className="text-[8px] font-bold leading-none mb-1">ISO 9001:2015</span>
                <span className="material-symbols-outlined text-xl">verified</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-white text-[#0a1a33] p-2 rounded w-16 h-16 text-center shadow-inner">
                <span className="font-extrabold text-[10px]">NSCDC</span>
                <span className="font-bold text-[8px] leading-none">CLASS-A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Subscribe & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8 border-t border-white/10">
            {/* Empty space to align with column 2 */}
            <div className="hidden lg:block"></div>

            <div className="flex flex-col">
                <h4 className="text-white font-bold text-lg mb-4">Subscribe</h4>
                <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-center gap-2 bg-secondary text-on-secondary font-bold py-2.5 px-6 rounded shadow-sm hover:bg-secondary/90 transition-colors text-sm w-fit">
                        <span className="material-symbols-outlined text-[18px]">call</span>
                        Reach Us
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white font-bold py-2.5 px-6 rounded hover:bg-white/5 transition-colors text-sm w-fit">
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                        Mail Us
                    </button>
                </div>
            </div>

            <div className="flex flex-col">
                <h4 className="text-secondary font-bold text-lg mb-4">Socials</h4>
                <div className="flex items-center gap-3">
                    <a href="#" className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">facebook</span>
                    </a>
                    <a href="#" className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">photo_camera</span> {/* Instagram placeholder */}
                    </a>
                    <a href="#" className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">alternate_email</span> {/* Twitter/X placeholder */}
                    </a>
                </div>
            </div>
            
            <div className="hidden lg:block"></div>
        </div>
      </div>
    </footer>
  );
}
