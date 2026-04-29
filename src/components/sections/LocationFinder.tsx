import { MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { LOCATIONS } from '../../data/mockData';

export const LocationFinder = () => {
  return (
    <section id="locations" className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
           <h2 className="text-4xl font-serif font-bold text-[#141414] mb-4">Find Your Store</h2>
           <p className="text-gray-600 mb-10">With over 3,000 locations, we’re always just around the corner.</p>
           
           <div className="space-y-6">
              <div className="relative">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Search by Location</h3>
                <div className="flex gap-2">
                  <Input placeholder="Enter Zip Code" className="bg-white" />
                  <Button variant="secondary" className="px-8 rounded-xl shrink-0">Search</Button>
                </div>
                <button className="flex items-center gap-2 mt-4 text-xs font-bold text-blue-800 hover:underline">
                  <div className="w-3 h-3 border-2 border-current rounded-full" /> Use My Location
                </button>
              </div>

              <div className="pt-8">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Nearby Locations</h3>
                <div className="space-y-4">
                  {LOCATIONS.map((loc) => (
                    <Card key={loc.id} className="bg-white border-transparent hover:border-[#E51636] cursor-pointer">
                       <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-sm">{loc.name}</h4>
                          <span className="text-[10px] text-gray-400 font-bold">{loc.distance}</span>
                       </div>
                       <p className="text-xs text-gray-500 mb-3">{loc.address}</p>
                       <div className="flex gap-2">
                         <Badge variant={loc.status === 'Open' ? 'success' : 'neutral'}>{loc.status}</Badge>
                         {loc.features.map(f => (
                           <Badge key={f} variant="neutral">{f}</Badge>
                         ))}
                       </div>
                    </Card>
                  ))}
                </div>
              </div>
           </div>
        </div>

        <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[500px]">
           <div className="w-full h-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-[#e0e0e0] flex items-center justify-center p-12 text-center text-gray-400 italic">
                {/* Map Integration Placeholder */}
                <div className="max-w-xs space-y-4">
                   <MapPin size={48} className="mx-auto mb-4 text-gray-300" />
                   <p className="text-sm">[Interactive Store Map Integration View Displayed Here using Google Maps JS SDK]</p>
                </div>
              </div>
              
              <div className="absolute top-6 left-6 right-6">
                 <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center gap-4">
                    <div className="bg-[#E51636] p-2 rounded-lg text-white">
                       <MapPin size={20} />
                    </div>
                    <div className="flex-1">
                       <div className="text-xs font-bold text-gray-400 uppercase tracking-tight">Active Filter</div>
                       <div className="text-sm font-bold text-[#141414]">Showing results for Atlanta, GA</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
