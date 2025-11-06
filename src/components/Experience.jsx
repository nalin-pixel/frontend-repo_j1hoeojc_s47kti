import { Globe, Mail, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" id="experience">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="font-serif text-3xl md:text-4xl text-gray-900">Client Experience</h3>
          <p className="mt-4 text-gray-700">
            We offer a seamless, concierge-style process from the first message to final delivery. Based in the South of France and available worldwide, we tailor collections to every celebration.
          </p>
          <ul className="mt-6 space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <Mail className="mt-1" size={20} />
              <span><strong>Inquiry:</strong> Share your event details and vision. We respond promptly with availability and a tailored proposal.</span>
            </li>
            <li className="flex items-start gap-3">
              <Calendar className="mt-1" size={20} />
              <span><strong>Reservation:</strong> Secure your date with a simple agreement and retainer. We coordinate timelines and creative direction.</span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="mt-1" size={20} />
              <span><strong>Worldwide:</strong> From Monaco to Maldives—our team travels globally, ensuring a refined, consistent experience.</span>
            </li>
          </ul>
        </div>

        <form
          id="contact"
          onSubmit={(e) => e.preventDefault()}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8"
        >
          <h4 className="text-xl font-semibold text-gray-900">Reservation Request</h4>
          <p className="text-gray-600 mt-1 mb-6">Share a few details and we’ll be in touch shortly.</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input type="text" required className="w-full rounded-md border-gray-300 focus:ring-0 focus:border-gray-900" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input type="email" required className="w-full rounded-md border-gray-300 focus:ring-0 focus:border-gray-900" placeholder="you@example.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-1">Event Details</label>
              <textarea rows={4} className="w-full rounded-md border-gray-300 focus:ring-0 focus:border-gray-900" placeholder="Date, location, type of event, vision" />
            </div>
          </div>

          <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm hover:bg-gray-800 transition">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
