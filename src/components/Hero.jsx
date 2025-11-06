import Spline from '@splinetool/react-spline';
import { Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient top + bottom to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90" />

      <div className="relative z-10 h-full container mx-auto px-6 md:px-10 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs md:text-sm text-gray-700 mb-4">
            <Camera size={16} />
            <span>Private & Yacht Event Photography — Côte d'Azur</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-gray-900">
            Elegant Photography for Private and Yacht Events
          </h1>
          <p className="mt-4 text-gray-700 md:text-lg max-w-2xl">
            We craft timeless imagery with a modern, minimalist touch—celebrating life’s most exquisite moments along the French Riviera and beyond.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-6 py-3 text-sm md:text-base hover:bg-gray-800 transition"
            >
              Inquire & Book
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 px-6 py-3 text-sm md:text-base hover:bg-gray-50 transition"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
