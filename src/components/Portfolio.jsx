import { useState } from 'react';

const categories = [
  { key: 'private', label: 'Private Events' },
  { key: 'yacht', label: 'Yacht Events' },
  { key: 'lifestyle', label: 'Lifestyle' },
];

// Curated selection of royalty-free placeholder images from Unsplash (direct links)
const images = {
  private: [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541447271487-09612b3f49fe?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
  ],
  yacht: [
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526178613408-5f4e03e70454?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1499696010180-025ef21df7cf?q=80&w=1600&auto=format&fit=crop',
  ],
  lifestyle: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512427691650-1e3e47f2edc6?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975624749-6c07ae3bf15b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop',
  ],
};

export default function Portfolio() {
  const [active, setActive] = useState('private');

  return (
    <section id="portfolio" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Portfolio</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              A curated showcase of elegant celebrations along the Côte d'Azur and worldwide.
            </p>
          </div>
          <div className="flex gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`rounded-full px-4 py-2 text-sm border transition ${
                  active === c.key
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images[active].map((src, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg shadow-sm">
              <img
                src={src}
                alt={`${active} ${i + 1}`}
                className="h-40 md:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
