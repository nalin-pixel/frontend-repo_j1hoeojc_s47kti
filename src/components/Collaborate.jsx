import { Briefcase, Handshake } from 'lucide-react';

export default function Collaborate() {
  return (
    <section id="collaborate" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="md:flex items-start justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="font-serif text-3xl md:text-4xl text-gray-900">Collaborative Opportunities</h3>
            <p className="mt-4 text-gray-700">
              We partner with luxury brands, yacht charters, event planners, hotels, and creative agencies for editorial, commercial, and brand storytelling.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="flex items-center gap-2"><Handshake size={18} /> Brand & Yacht Partnerships</li>
              <li className="flex items-center gap-2"><Briefcase size={18} /> Editorial & Commercial Shoots</li>
              <li className="flex items-center gap-2"><Briefcase size={18} /> Content for Hospitality & Travel</li>
              <li className="flex items-center gap-2"><Handshake size={18} /> Campaigns & Launch Events</li>
            </ul>
          </div>

          <div className="mt-10 md:mt-0 bg-gray-50 rounded-xl border border-gray-200 p-6 md:p-8 w-full max-w-md">
            <h4 className="text-lg font-semibold text-gray-900">Partner With Us</h4>
            <p className="text-gray-600 mt-1 mb-4">Let’s create something remarkable together.</p>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm hover:bg-gray-800 transition">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
