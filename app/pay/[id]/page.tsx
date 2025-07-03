import { notFound } from 'next/navigation'

type Props = {
  params: { id: string }
}

export default function PayUser({ params }: Props) {
  const { id } = params

  if (!id) return notFound()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold">Pay for {id}</h1>
      <p className="text-gray-600 mt-2">Scan this QR or click below to proceed to payment.</p>
      <a
        href="/"
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Return Home
      </a>
    </div>
  )
}
