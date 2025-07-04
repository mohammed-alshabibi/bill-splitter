'use client'
import { useState } from 'react'
import QRCodeBox from '@/components/QRCodeBox'

export default function Home() {
  const [total, setTotal] = useState(100)
  const [people, setPeople] = useState(4)
  const [generated, setGenerated] = useState(false)

  const [users, setUsers] = useState<{ id: string; amount: number }[]>([])

  const handleGenerate = () => {
    const perPerson = total / people
    const newUsers = Array.from({ length: people }).map((_, i) => ({
      id: `user-${i + 1}`,
      amount: perPerson,
    }))
    setUsers(newUsers)
    setGenerated(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-purple-200 flex flex-col items-center p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Split Your Bill Effortlessly
        </h1>
        <p className="text-gray-600 text-lg">
          Divide expenses quickly and fairly with friends
        </p>
      </section>

      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 space-y-4 border border-gray-200">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Total Amount ($)</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Number of People</label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          onClick={handleGenerate}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2 rounded-md transition-transform hover:scale-105"
        >
          Generate QR Codes
        </button>
      </div>

      {generated && (
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <QRCodeBox key={user.id} userId={user.id} amount={user.amount} />
          ))}
        </section>
      )}
    </main>
  )
}
