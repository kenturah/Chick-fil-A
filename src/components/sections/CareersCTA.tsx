import { Button } from '../ui/Button';

export const CareersCTA = () => {
  return (
    <section id="careers" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#004F71] z-0" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-white/5 -skew-x-12 -translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10 text-white">
        <h2 className="text-5xl font-serif font-bold mb-6">Join Our Team</h2>
        <p className="text-xl text-white/80 mb-10 leading-relaxed">
          More than just a job, it's an opportunity to grow, serve others, and be part of something meaningful. Discover a workplace where you're valued and supported.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
           <Button variant="white" size="lg" className="w-full sm:w-auto">Explore Careers</Button>
           <a href="#" className="font-bold border-b-2 border-white/20 hover:border-white transition-all py-1">Learn About Franchising</a>
        </div>
      </div>
    </section>
  );
};
