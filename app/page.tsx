'use client'

import { useState } from 'react'

export default function Home() {
  const [bill, setBill] = useState<number | ''>('')
  const [people, setPeople] = useState<number | ''>('')
  const [tip, setTip] = useState<number>(15)

  const isValid = typeof bill === 'number' && bill > 0 && typeof people === 'number' && people > 0

  const totalTip = isValid ? (bill * tip) / 100 : 0
  const totalPerPerson = isValid ? (bill + totalTip) / people : 0
  const tipPerPerson = isValid ? totalTip / people : 0

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 p-6 flex flex-col items-center">
      <section className="text-center mb-8 mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Split Your Bill Effortlessly</h1>
        <p className="text-gray-600 mt-2">Divide expenses quickly and fairly with friends</p>
      </section>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <form className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Total Bill Amount ($)</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              placeholder="e.g. 100"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Number of People</label>
            <input
              type="number"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              placeholder="e.g. 4"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Tip: <span className="text-pink-600 font-semibold">{tip}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={tip}
              onChange={(e) => setTip(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </form>

        {isValid && (
          <div className="mt-6 border-t pt-4 text-gray-700">
            <h3 className="font-semibold text-lg mb-2">Results</h3>
            <p><strong>Each Person Pays:</strong> ${totalPerPerson.toFixed(2)}</p>
            <p><strong>Tip per Person:</strong> ${tipPerPerson.toFixed(2)}</p>
          </div>
        )}

        <button
          type="button"
          className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md font-semibold transition-transform duration-200 hover:scale-105"
          onClick={() => {}}
        >
          Split Now
        </button>
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        &copy; 2025 BillSplitter App
      </footer>
    </main>
  )
}
