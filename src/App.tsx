import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { MenuHighlights } from './components/sections/MenuHighlights';
import { RewardsSection } from './components/sections/RewardsSection';
import { LocationFinder } from './components/sections/LocationFinder';
import { Testimonials } from './components/sections/Testimonials';
import { CareersCTA } from './components/sections/CareersCTA';
import { Button } from './components/ui/Button';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#333333] selection:bg-[#E51636] selection:text-white">
      <Navbar />
      
      <main className="pt-16">
        <Hero />
        
        {/* Quality Ribbon - from Professional Polish Design HTML */}
        <section className="bg-white border-y border-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#E51636] font-bold shadow-sm shrink-0">✓</div>
              <div className="text-xs">
                <div className="font-bold text-[#141414] uppercase tracking-tight">Quality Ingredients</div>
                <p className="text-gray-500">Real chicken breast, hand-breaded daily in our kitchens.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#E51636] font-bold shadow-sm shrink-0">❤</div>
              <div className="text-xs">
                <div className="font-bold text-[#141414] uppercase tracking-tight">Genuine Hospitality</div>
                <p className="text-gray-500">It's our absolute pleasure to serve you with care.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#E51636] font-bold shadow-sm shrink-0">⌂</div>
              <div className="text-xs">
                <div className="font-bold text-[#141414] uppercase tracking-tight">Community First</div>
                <p className="text-gray-500">Supporting local neighborhoods and schools since 1967.</p>
              </div>
            </div>
          </div>
        </section>

        <MenuHighlights />
        <RewardsSection />
        <LocationFinder />
        <Testimonials />
        <CareersCTA />
      </main>

      <Footer />

      {/* Sticky Mobile Order Button - Conversion Element */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
         <Button className="w-full shadow-2xl py-5" size="lg">Order Now</Button>
      </div>

    </div>
  );
}
