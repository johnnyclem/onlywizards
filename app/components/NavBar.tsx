import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white text-lg font-semibold hover:text-gray-300">
            Home
          </Link>
          <Link href="/chat-with-clem" className="text-white text-lg font-semibold hover:text-gray-300">
            Chat with Clem
          </Link>
        </div>
      </div>
    </nav>
  )
} 