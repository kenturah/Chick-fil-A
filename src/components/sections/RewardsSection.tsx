import { Button } from '../ui/Button';

export const RewardsSection = () => {
  return (
    <section id="rewards" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-[#004F71] rounded-[2rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-16 relative">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex-1 space-y-8 relative z-10">
            <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
              Join Chick-fil-A One®
            </div>
            <h2 className="text-5xl font-serif font-bold leading-tight">Earn free treats with every order.</h2>
            <ul className="space-y-4">
              {[
                'Earn points on every purchase',
                'Redeem rewards for your favorite food',
                'Experience exclusive member-only benefits',
                'Convenient mobile ordering and express pickup'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg opacity-90">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-6">
              <Button variant="white" size="lg">Get Started</Button>
              <Button className="bg-transparent border border-white/30 hover:bg-white/10 shadow-none" size="lg">Learn More</Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
               <img 
                 src="https://www.chick-fil-a.com/-/media/images/chick-fil-a/one/cfa-one-app-hand.png" 
                 alt="Chick-fil-A One App" 
                 className="w-full max-w-sm mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
               />
               
               <div className="absolute -top-6 -right-6 animate-bounce">
                  <div className="bg-[#E51636] p-4 rounded-2xl shadow-xl border border-white/20 text-center">
                     <div className="text-white font-black text-xl leading-none">FREE</div>
                     <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest mt-1">Chicken Biz</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
