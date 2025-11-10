import React, { useState } from 'react';
import { Clock, Phone, CheckCircle2 } from 'lucide-react';

export default function BookingAndTracking() {
  const [mode, setMode] = useState('Hourly');
  const [active, setActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  React.useEffect(() => {
    let t;
    if (active) {
      t = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(t);
  }, [active]);

  const price = mode === 'Hourly' ? 799 : mode === 'Daily' ? 3999 : 24999;

  const format = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, '0');
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${h}:${m}:${sec}`;
  };

  return (
    <section className="space-y-6">
      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <h3 className="text-sm font-semibold text-gray-900">Booking Schedule</h3>
        <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
          {['Hourly', 'Daily', 'Monthly'].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-xl px-3 py-2 font-medium ${mode === m ? 'bg-blue-500 text-white' : 'bg-gray-50 text-gray-700'}`}
            >
              {m === 'Daily' ? 'Daily Shift' : m === 'Monthly' ? 'Monthly' : 'Hourly'}
            </button>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2 text-xs text-gray-600">
          {['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '18:00', '19:00'].map((slot) => (
            <button key={slot} className="rounded-lg border border-gray-200 px-2 py-2 hover:bg-blue-50 hover:border-blue-200">{slot}</button>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-gray-600">Estimated Price</span>
          <span className="font-semibold text-gray-900">₹{price.toLocaleString()}</span>
        </div>
        <button className="mt-3 w-full rounded-xl bg-green-500 px-4 py-3 text-white font-semibold hover:bg-green-600">Confirm Booking</button>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">In-Service Tracking</h3>
          <button className="rounded-full bg-blue-50 p-2 text-blue-700">
            <Phone size={16} />
          </button>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${active ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-600'}`}>
            <Clock />
          </div>
          <div>
            <p className="text-xs text-gray-500">Active shift timer</p>
            <p className="text-lg font-semibold text-gray-900">{format(seconds)}</p>
          </div>
          <div className="ml-auto">
            <button
              onClick={() => setActive((a) => !a)}
              className={`rounded-xl px-4 py-2 text-sm font-medium ${active ? 'bg-red-50 text-red-700' : 'bg-blue-500 text-white'}`}
            >
              {active ? 'Clock-out' : 'Clock-in'}
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-gray-200 p-3">
            <p className="text-xs font-medium text-gray-700">Patient Care Notes</p>
            <textarea className="mt-2 h-20 w-full resize-none rounded-lg border border-gray-200 p-2 text-xs outline-none focus:border-blue-300" placeholder="Notes about patient comfort, meals, mobility..." />
          </div>
          <div className="rounded-xl border border-gray-200 p-3">
            <p className="text-xs font-medium text-gray-700">Medication & Vitals</p>
            <div className="mt-2 space-y-2 text-xs text-gray-700">
              {['Medication given', 'BP checked', 'Pulse monitored', 'Temperature recorded'].map((i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span>{i}</span>
                </label>
              ))}
            </div>
            <button className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
              <CheckCircle2 size={14} /> Save Log
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
