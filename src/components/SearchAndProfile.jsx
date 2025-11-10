import React, { useState } from 'react';
import { Search, Filter, Star, User } from 'lucide-react';

const FilterChip = ({ label }) => (
  <button className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">{label}</button>
);

const NurseCard = ({ name, qualification, exp, rating, onOpen }) => (
  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
        <User size={22} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{qualification} • {exp} yrs</p>
        <div className="mt-1 flex items-center gap-1 text-amber-500">
          <Star size={14} fill="#f59e0b" className="text-amber-400" />
          <span className="text-xs font-medium text-gray-700">{rating}</span>
        </div>
      </div>
      <button onClick={onOpen} className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700">Profile</button>
    </div>
  </div>
);

export default function SearchAndProfile({ onBook }) {
  const [query, setQuery] = useState('');

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
        <Search className="text-gray-400" size={18} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for nurses by skill or location"
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        <Filter className="text-gray-400" size={18} />
      </div>

      <div className="flex flex-wrap gap-2">
        {['Experience', 'Language', 'Gender', 'Specialization', 'Availability'].map((f) => (
          <FilterChip key={f} label={f} />
        ))}
      </div>

      <div className="space-y-3">
        <NurseCard name="Aisha Verma" qualification="B.Sc Nursing" exp={6} rating={4.9} onOpen={() => {}} />
        <NurseCard name="Meera Shah" qualification="GNM" exp={8} rating={4.8} onOpen={() => {}} />
        <NurseCard name="Rohit Rao" qualification="ANM" exp={5} rating={4.7} onOpen={() => {}} />
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <User size={24} />
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-gray-900">Nurse Aisha Verma</p>
            <p className="text-xs text-gray-500">B.Sc Nursing • 6 yrs • ICU, Wound Care, Post-op</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {['ICU', 'Geriatrics', 'Vitals', 'Medication', 'Physio Assist'].map((t) => (
                <span key={t} className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-gray-600">
          {['9:00', '10:00', '11:00', '14:00', '16:00', '18:00'].map((slot) => (
            <button key={slot} className="rounded-lg border border-gray-200 px-2 py-2 hover:bg-blue-50 hover:border-blue-200">{slot}</button>
          ))}
        </div>
        <button onClick={onBook} className="mt-4 w-full rounded-xl bg-blue-500 px-4 py-3 text-white font-medium hover:bg-blue-600">Book Nurse</button>
      </div>
    </section>
  );
}
