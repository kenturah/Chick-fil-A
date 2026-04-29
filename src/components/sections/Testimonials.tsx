import { Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { TESTIMONIALS } from '../../data/mockData';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Cow Mascot Placeholder Decoration */}
        <div className="absolute -left-20 top-0 opacity-10 pointer-events-none hidden xl:block">
           <div className="text-[15rem] font-black uppercase text-gray-400 rotate-12">MOO</div>
        </div>

        <div className="text-center mb-16 relative z-10">
           <h2 className="text-4xl font-serif font-bold text-[#141414] mb-4">What Our Guests Say</h2>
           <div className="w-20 h-1 bg-[#E51636] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id} className="p-8 flex flex-col items-center text-center bg-[#FDFDFD] hover:scale-105">
               <div className="flex text-yellow-400 mb-6 gap-1">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <p className="text-gray-600 italic text-lg mb-8 leading-relaxed">"{t.quote}"</p>
               <div className="mt-auto">
                  <div className="font-bold text-[#141414]">{t.author}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{t.location}</div>
               </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
