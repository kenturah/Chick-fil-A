export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
           <div className="text-2xl font-bold italic text-[#E51636] tracking-tighter">Chick-fil-A</div>
           <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
             Serving our guests with hospitality and care since 1967. We're committed to making a difference in the lives of those around us.
           </p>
           <div className="bg-[#E51636] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block">
             Closed Sundays
           </div>
        </div>

        <div>
           <h5 className="font-bold text-[#141414] uppercase text-xs tracking-widest mb-8 border-b border-gray-50 pb-2">Company</h5>
           <ul className="space-y-4 text-sm font-semibold text-gray-500">
             <li><a href="#" className="hover:text-[#E51636] transition-colors">About</a></li>
             <li><a href="#" className="hover:text-[#E51636] transition-colors">Careers</a></li>
             <li><a href="#" className="hover:text-[#E51636] transition-colors">Franchising</a></li>
             <li><a href="#" className="hover:text-[#E51636] transition-colors">Press Room</a></li>
           </ul>
        </div>

        <div>
           <h5 className="font-bold text-[#141414] uppercase text-xs tracking-widest mb-8 border-b border-gray-50 pb-2">Support</h5>
           <ul className="space-y-4 text-sm font-semibold text-gray-500">
             <li><a href="#" className="hover:text-[#E51636] transition-colors">Contact Us</a></li>
             <li><a href="#" className="hover:text-[#E51636] transition-colors">FAQ</a></li>
             <li><a href="#" className="hover:text-[#E51636] transition-colors">Gift Cards</a></li>
             <li><a href="#" className="hover:text-[#E51636] transition-colors">Catering</a></li>
           </ul>
        </div>

        <div>
           <h5 className="font-bold text-[#141414] uppercase text-xs tracking-widest mb-8 border-b border-gray-50 pb-2">Connect</h5>
           <div className="flex gap-4 mb-8">
              {['Facebook', 'Instagram', 'Twitter', 'TikTok'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#E51636] hover:text-white hover:border-[#E51636] transition-all duration-300"
                >
                  <span className="text-[10px] font-bold uppercase tracking-tighter">{social.charAt(0)}</span>
                </a>
              ))}
           </div>
           <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Subscribe to our newsletter</div>
              <div className="flex border-b border-gray-200">
                 <input type="email" placeholder="Your Email" className="bg-transparent py-2 text-sm outline-none w-full" />
                 <button className="text-[#E51636] text-xl pb-1">→</button>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-[#141414]">Privacy Policy</a>
            <a href="#" className="hover:text-[#141414]">Terms</a>
            <a href="#" className="hover:text-[#141414]">Accessibility</a>
            <a href="#" className="hover:text-[#141414]">Do Not Sell My Info</a>
         </div>
         <div className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">
            © {currentYear} Chick-fil-A, Inc. All rights reserved.
         </div>
      </div>
    </footer>
  );
};
