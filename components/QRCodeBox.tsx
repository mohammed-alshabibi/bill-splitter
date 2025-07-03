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
    <div className="bg-white border p-4 rounded shadow text-center">
      <p className="font-semibold mb-2">{userId}</p>
      <QRCodeSVG value={payUrl} size={128} />
      <p className="text-sm mt-2">${amount.toFixed(2)}</p>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
      >
        {loading ? 'Loading...' : 'Pay Now'}
      </button>
    </div>
  )
}
