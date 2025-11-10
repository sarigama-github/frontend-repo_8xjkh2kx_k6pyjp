import React from 'react';
import Spline from '@splinetool/react-spline';

export default function OnboardingHero({ onGetStarted }) {
  return (
    <section className="w-full overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="relative h-72 w-full">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-md p-4 shadow-xl">
            <h1 className="text-xl font-semibold text-gray-900">Welcome to CareBridge</h1>
            <p className="mt-1 text-sm text-gray-600">Reliable Nursing Support. Anytime. At Home.</p>
            <button
              onClick={onGetStarted}
              className="mt-4 w-full rounded-xl bg-blue-500 px-4 py-3 text-white font-medium shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
