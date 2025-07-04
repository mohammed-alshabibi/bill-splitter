// app/pay/[id]/page.tsx

'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = { params: { id: string } }

export default function PayPage({ params }: Props) {
  const { id } = params
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    setLoading(true)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ userId: id, amount: 25 }),
    })

    const { url } = await res.json()
    router.push(url)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-2">Welcome {id}</h1>
      <p className="text-gray-600 mb-6">You're about to pay <strong>$25.00</strong></p>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Redirecting...' : 'Pay Now'}
      </button>
    </main>
  )
}
