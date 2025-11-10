import React from 'react';
import { Star, Clock, Calendar, User } from 'lucide-react';

const SuggestedCard = ({ name, exp, rating, tag }) => (
  <div className="min-w-[200px] rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
        <User size={20} />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{exp} yrs • {tag}</p>
      </div>
    </div>
    <div className="mt-3 flex items-center gap-1 text-amber-500">
      <Star size={16} fill="#f59e0b" className="text-amber-400" />
      <span className="text-xs font-medium text-gray-700">{rating}</span>
    </div>
    <button className="mt-3 w-full rounded-xl bg-blue-500 px-3 py-2 text-white text-sm font-medium hover:bg-blue-600">View</button>
  </div>
);

export default function HomeDashboard({ onBookNow }) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Hi Chinmay</h2>
        <p className="text-sm text-gray-600">How can we support your care today?</p>
      </div>

      <button
        onClick={onBookNow}
        className="w-full rounded-2xl bg-blue-500 px-5 py-4 text-white font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Book Nurse Now
      </button>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">Suggested Nurses</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <SuggestedCard name="Aisha Verma" exp={6} rating={4.9} tag="ICU" />
          <SuggestedCard name="Meera Shah" exp={8} rating={4.8} tag="Pediatrics" />
          <SuggestedCard name="Rohit Rao" exp={5} rating={4.7} tag="Geriatrics" />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">Quick Categories</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'On-demand', color: 'bg-blue-50 text-blue-700' },
            { label: 'Short-Term', color: 'bg-green-50 text-green-700' },
            { label: 'Long-Term', color: 'bg-emerald-50 text-emerald-700' },
          ].map((item) => (
            <button key={item.label} className={`rounded-xl px-3 py-3 text-xs font-medium ${item.color}`}>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">Upcoming</h3>
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">Shift with Aisha Verma</p>
              <p className="text-xs text-gray-500">Wed, 10:00 AM - 2:00 PM</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock size={16} />
              <Calendar size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
