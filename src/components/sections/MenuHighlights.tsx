import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { MENU_ITEMS } from '../../data/mockData';

export const MenuHighlights = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#141414] mb-4">Fan Favorites</h2>
            <p className="text-gray-500 max-w-sm font-semibold text-sm">Our most loved items, made fresh just for you.</p>
          </div>
          <a href="#" className="text-[#E51636] text-sm font-bold uppercase tracking-widest hover:underline pb-2">Full Menu &rarr;</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item) => (
            <Card key={item.id} className="group p-6 flex flex-col h-full bg-[#fcfcfc]">
              <div className="h-44 flex items-center justify-center mb-8">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" 
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#141414]">{item.name}</h3>
              <p className="text-gray-500 text-xs mb-6 flex-1 leading-relaxed">{item.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-[#141414]">{item.price}</span>
                <Button variant="outline" size="sm" className="px-4">Add</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
