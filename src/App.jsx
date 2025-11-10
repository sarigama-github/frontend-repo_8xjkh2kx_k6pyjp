import React, { useState } from 'react';
import OnboardingHero from './components/OnboardingHero';
import HomeDashboard from './components/HomeDashboard';
import SearchAndProfile from './components/SearchAndProfile';
import BookingAndTracking from './components/BookingAndTracking';

function App() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, 3));

  return (
    <div className="mx-auto max-w-md bg-gray-50 min-h-screen p-4">
      {/* Brand Header */}
      <header className="sticky top-0 z-10 mb-4 rounded-2xl bg-white/80 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm ring-1 ring-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-blue-500 text-white grid place-items-center font-bold">CB</ndiv>
            <div>
              <p className="text-sm font-semibold text-gray-900">CareBridge</p>
              <p className="text-[10px] text-gray-500">Care • Trust • Comfort</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            {['Onboard', 'Home', 'Search', 'Book'].map((l, i) => (
              <button
                key={l}
                onClick={() => setStep(i)}
                className={`rounded-full px-2 py-1 ${step === i ? 'bg-blue-100 text-blue-700' : 'text-gray-500'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="space-y-6">
        {step === 0 && <OnboardingHero onGetStarted={next} />}
        {step === 1 && <HomeDashboard onBookNow={() => setStep(2)} />}
        {step === 2 && <SearchAndProfile onBook={() => setStep(3)} />}
        {step === 3 && <BookingAndTracking />}
      </main>

      <footer className="mt-10 pb-10 text-center text-[10px] text-gray-500">
        © {new Date().getFullYear()} CareBridge. Professional Home Nursing Support.
      </footer>
    </div>
  );
}

export default App;
