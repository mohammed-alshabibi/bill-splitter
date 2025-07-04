// app/success/page.tsx

'use client'
import { useSearchParams } from 'next/navigation'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const user = searchParams.get('user')

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-green-100">
      <h1 className="text-3xl font-bold text-green-800">🎉 Payment Successful!</h1>
      <p className="mt-4 text-lg text-green-700">
        Thank you {user}, your payment is complete.
      </p>
      <a href="/" className="mt-6 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
        Back to Home
      </a>
    </main>
  )
}
