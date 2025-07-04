'use client'
import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

type Props = {
  userId: string
  amount: number
}

export default function QRCodeBox({ userId, amount }: Props) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ amount, userId }),
    })

    const data = await res.json()
    window.location.href = data.url
  }

  const payUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/pay/${userId}`

  return (
    <div className="bg-white/90 backdrop-blur-md border border-gray-200 p-4 rounded-xl shadow-md text-center flex flex-col items-center space-y-2">
      <p className="font-semibold text-gray-700">{userId}</p>
      <QRCodeSVG value={payUrl} size={128} />
      <p className="text-sm text-gray-600">${amount.toFixed(2)}</p>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md transition hover:scale-105 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Pay Now'}
      </button>
    </div>
  )
}
